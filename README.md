# M3Notes (version web)

Application de prise de notes inspirée de Google Keep, en React, Vite et Firebase. Elle est déployée sur GitHub Pages : https://draymondo.github.io/m3notes-web/

## Fonctionnalités

- Connexion par e-mail et mot de passe, ou avec Google
- Grille de notes : couleurs, étiquettes, listes à cocher, rendu Markdown, épinglage, archivage, recherche
- Historique des versions d'une note
- Pièces jointes et dossiers stockés sur le Google Drive de l'utilisateur (accès limité aux fichiers créés par l'application)
- Coffre chiffré : titre, contenu et pièces jointes sont chiffrés dans le navigateur (AES-GCM, clé dérivée du mot de passe du coffre). Format décrit dans `docs/VAULT_FORMAT.md`
- Export (JSON, Markdown, texte, PDF) et sauvegarde complète des données avec les fichiers Drive, restaurable depuis l'application
- NoteSkills : trois modes de jeu (quiz, mémoire, frappe)
- Mode sombre, installable (PWA)
- Cache hors ligne Firestore (un seul onglet à la fois)
- Intégration IA (API REST et serveur MCP) qui n'expose que les notes normales, jamais le coffre : voir `docs/M3NOTES_AI.md`

## Lancer en local

```bash
npm install
npm run dev
```

`npm run verify` construit le site et contrôle le résultat.

## Déploiement

Chaque envoi sur la branche `main` déclenche `.github/workflows/deploy.yml` : `npm ci`, `npm run build`, puis publication sur GitHub Pages.

## Firebase

L'application utilise le projet Firebase `m3notes-9712f`, partagé avec d'autres applications. À activer : Authentication (e-mail/mot de passe et Google) et Firestore. Les règles Firestore en production sont gérées dans la console Firebase : compare-les avec `firestore.rules` avant tout déploiement.

## Structure

```
src/
├── components/   cartes, éditeurs (listes, étiquettes, couleurs), pièces jointes, coffre
├── context/      authentification, thème, coffre
├── hooks/
├── pages/        connexion, accueil, note, coffre, export, NoteSkills
├── services/     notes, coffre (chiffrement), export, Drive
├── utils/
└── firebase.js
functions/        API IA (REST) et serveur MCP (Cloud Functions)
docs/             format du coffre, intégration IA
public/           manifeste PWA, service worker, icônes
scripts/          contrôle du build
```
