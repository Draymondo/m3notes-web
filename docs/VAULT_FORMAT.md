# Format du coffre M3Notes

Ce document est le contrat entre l'application, la migration et l'outil externe de déchiffrement.
Tout changement de format doit d'abord être écrit ici.

Statut : v1 = format actuel (décrit d'après `src/services/vault.js`). v2 = format visé (proposition, à valider).

## 1. Vocabulaire

- **Mot de passe** : saisi par l'utilisateur pour ouvrir le coffre.
- **DEK** (clé de données) : clé AES-256 aléatoire qui chiffre toutes les données du coffre (v2 uniquement).
- **KEK** : clé dérivée du mot de passe (ou de la clé de récupération) qui protège la DEK.
- **Clé de récupération** : code aléatoire de 256 bits, affiché une seule fois, noté sur papier.
- Encodage : tous les octets sont écrits en base64 standard (avec padding) dans Firestore.

## 2. Format v1 (actuel)

### Clé
- `PBKDF2-HMAC-SHA256`, **250 000 itérations**, sel de 16 octets (`vaultMeta.salt`, base64).
- Mot de passe encodé en UTF-8 **sans normalisation**.
- Sortie : clé AES-GCM 256 bits. La clé *est* la clé de données (pas de DEK).
- Le nombre d'itérations est codé en dur dans le code, **absent des données**.

### Document `vaultMeta/{uid}`
```
{ salt: "<base64, 16 octets>", check: "<iv>:<ct>" }
```
`check` est le texte `VAULT_OK` chiffré. Le mot de passe est jugé correct si le déchiffrement redonne `VAULT_OK`.

### Champs chiffrés des notes (`notes/{id}` avec `isVault: true`)
Champs : `encTitle`, `encContent`, `encAttachments`.
Format d'une valeur : `<ivBase64>:<ciphertextBase64>`
- IV de 12 octets aléatoires, AES-GCM, tag de 128 bits **inclus à la fin** du texte chiffré, pas de données additionnelles (AAD).
- Le clair est du texte UTF-8.
- `encAttachments` déchiffré = tableau JSON : `[{ name, mimeType, size, driveFileId, relativePath? }]`.

### Fichiers Drive (pièces jointes du coffre)
- Nom : `m3notes-vault-<uuid>.bin`, `appProperties.m3notes = "attachment"`.
- Contenu : `IV (12 octets) || texte chiffré + tag AES-GCM`.
- Le nom d'origine et le type du fichier n'existent que dans `encAttachments`.

### Sauvegarde complète (`backupType: "complete-data-and-drive"`)
- `userData.notes[]`, `userData.histories{}`, `userData.vaultMeta`.
- `driveFiles[]` avec `id`, `name`, `contentBase64` (contenu tel que stocké, donc toujours chiffré).
- Les horodatages sont de la forme `{ "__type": "timestamp", "value": <millisecondes> }`.

## 3. Format v2 (proposé)

### Principes
1. Les données sont chiffrées par une **DEK aléatoire**, jamais directement par le mot de passe.
2. La DEK est stockée deux fois, chiffrée : par le mot de passe, et par la clé de récupération.
3. Changer de mot de passe ou d'itérations ne rechiffre **aucune donnée** : on rechiffre seulement la DEK.
4. Toute valeur est auto-descriptive (préfixe `v2:`), donc v1 et v2 peuvent coexister pendant la migration.

### Mot de passe
- Normalisé en Unicode **NFC** avant l'encodage UTF-8 (v1 ne normalise pas : l'outil doit gérer les deux).
- Longueur minimale imposée à la création et au changement : **6 caractères** (choix du propriétaire). En dessous de 12 caractères, l'app affiche un avertissement « mot de passe faible » avec un indicateur de force, sans bloquer. Pas de maximum.

### KEK du mot de passe
- `PBKDF2-HMAC-SHA256`, **600 000 itérations**, sel de 16 octets aléatoires, sortie AES-GCM 256 bits.
- Les paramètres sont **écrits dans les données** (`kdf`), jamais codés en dur seulement.

### Clé de récupération
- 32 octets aléatoires (`crypto.getRandomValues`).
- Affichage : Base32 (RFC 4648, majuscules, sans padding, 52 caractères), en groupes de 4 séparés par des tirets.
- KEK de récupération : `HKDF-SHA256(ikm = clé de récupération, salt = vide, info = "m3notes-vault-v2-recovery")` → AES-GCM 256 bits.
- À la création, l'utilisateur doit **ressaisir la clé** pour confirmer qu'il l'a notée. Sans confirmation, le coffre v2 n'est pas activé.

### Chiffrement des clés (wrapping)
- La DEK (32 octets) est chiffrée en AES-GCM avec la KEK : IV de 12 octets, AAD = `"m3notes-vault-v2|pw"` (mot de passe) ou `"m3notes-vault-v2|rec"` (récupération).
- Format : `v2:<ivBase64>:<ciphertextBase64>`.
- Un déchiffrement qui échoue = mauvais mot de passe. Le champ `check` n'existe plus en v2.

### Document `vaultMeta/{uid}`
```
{
  // v1, conservé tant que la migration n'est pas terminée
  salt, check,

  v2: {
    kdf: { alg: "PBKDF2-SHA256", iterations: 600000 },
    salt: "<base64, 16 octets>",
    wrappedKey: "v2:<iv>:<ct>",
    recoveryWrappedKey: "v2:<iv>:<ct>",
    migration: "in-progress" | "complete"
  }
}
```

### Champs chiffrés des notes (v2)
- Mêmes champs (`encTitle`, `encContent`, `encAttachments`), chiffrés avec la **DEK**.
- Format : `v2:<ivBase64>:<ciphertextBase64>`, AES-GCM, IV de 12 octets, sans AAD.
- Détection : une valeur qui commence par `v2:` est v2, sinon v1.

### Fichiers Drive (v2)
- Contenu : `"M3V2" (4 octets : 4D 33 56 32) || IV (12 octets) || texte chiffré + tag`.
- La marque `M3V2` permet à l'outil de reconnaître le format sans les métadonnées. Un fichier sans cette marque est v1.

### Opérations
- **Ouvrir** : dériver la KEK, déchiffrer `wrappedKey`, importer la DEK en clé non extractable.
- **Changer le mot de passe** : déchiffrer la DEK avec l'ancien mot de passe, nouveau sel, nouvelle KEK, nouveau `wrappedKey`. `recoveryWrappedKey` ne change pas.
- **Régénérer la clé de récupération** : nouvelle clé, nouveau `recoveryWrappedKey`, ancien invalidé.
- **Changer les itérations plus tard** : comme changer le mot de passe, sans rechiffrer les données.

## 4. Kit de secours

- L'app propose un bouton **« Télécharger l'en-tête du coffre »** qui exporte `vault-header.json` : `vaultMeta` seul (sel, paramètres, clés chiffrées).
- Ce fichier n'est pas secret sans le mot de passe. Il se range avec la clé de récupération papier.
- Avec `vault-header.json` + mot de passe (ou clé de récupération) + fichiers `.bin`, on peut déchiffrer les fichiers **sans** la sauvegarde complète (mais sans les noms d'origine).

## 5. Protocole de migration v1 vers v2

Règle absolue : **aucune donnée v2 n'est écrite tant que la DEK n'est pas stockée et vérifiée.**

0. Prérequis : sauvegarde complète récente, coffre ouvert avec le mot de passe v1.
1. Générer la DEK et la clé de récupération. Afficher la clé. L'utilisateur la ressaisit pour confirmer.
2. Écrire `vaultMeta.v2` avec `migration: "in-progress"`. Relire. Vérifier que la DEK se déchiffre à la fois avec le mot de passe et avec la clé de récupération. En cas d'échec, arrêter.
3. Pour chaque note du coffre (idempotent : ignorer les notes déjà en v2) :
   1. Déchiffrer en v1.
   2. Pour chaque pièce jointe : télécharger, déchiffrer v1, chiffrer v2, envoyer un **nouveau** fichier Drive.
   3. Chiffrer titre, contenu et liste de pièces jointes (avec les nouveaux `driveFileId`) en v2.
   4. Écrire la note en **une seule** mise à jour.
   5. Relire et déchiffrer pour vérifier que le clair est identique.
   6. Seulement alors, supprimer les anciens fichiers Drive.
4. Quand toutes les notes sont en v2 : `migration: "complete"`, puis supprimer `salt` et `check` v1. (Ils permettraient sinon de tester des mots de passe contre l'ancien coût de 250 000.)
5. Détruire les anciennes sauvegardes (format v1) et en faire une nouvelle.

Pendant la migration, l'ouverture du coffre dérive les deux clés (v1 et v2) et choisit selon le préfixe de chaque valeur.
Une interruption est sans danger : on relance, les notes déjà migrées sont ignorées. Des fichiers Drive orphelins peuvent rester et se nettoient ensuite.

## 6. Restauration d'une sauvegarde

- Ne jamais écraser `vaultMeta` si un coffre existe déjà et que le `vaultMeta` de la sauvegarde est différent.
- Dans ce cas, ne pas restaurer les notes du coffre et expliquer pourquoi (elles ne se déchiffreraient pas avec la clé actuelle).
- Une sauvegarde v1 ne peut être ouverte que par l'outil externe ou dans un coffre v1.

## 7. Exigences pour l'outil externe

- Fichier unique, fonctionne hors ligne, aucun appel réseau.
- Entrées : (A) sauvegarde complète JSON, ou (B) `vault-header.json` + fichiers `.bin`.
- Identifiants : mot de passe, ou clé de récupération (v2 seulement).
- Lit v1 **et** v2 (anciennes sauvegardes).
- Écrit les notes déchiffrées en Markdown/JSON, les fichiers avec leur nom d'origine quand `encAttachments` est disponible, sinon `fichier-<n>.bin` avec détection du type par les premiers octets.

## 8. Vecteurs de test

À générer par un script fixe avec une DEK, un sel et des IV imposés, puis à enregistrer dans `docs/vault-test-vectors.json` :
mot de passe de test, sel, `wrappedKey`, `recoveryWrappedKey`, une valeur v1, une valeur v2, un petit fichier `.bin` v1 et un v2, avec le clair attendu.
L'application et l'outil externe doivent tous deux les déchiffrer correctement.
