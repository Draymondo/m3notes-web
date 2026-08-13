# M3Notes – Version Web

Clone personnel de Google Keep – version navigateur (React + Vite + Firebase)

## Fonctionnalités

- Authentification email / mot de passe
- Grille de notes (style Keep, design un peu plus moderne)
- Création / édition de notes
- Couleurs
- Épinglage + Archive
- Recherche
- Mode sombre
- Offline (Firestore persistence)
- Responsive (mobile + desktop)

## Lancer en local

```bash
cd m3notes-web
npm install
npm run dev
```

## Build pour GitHub Pages

```bash
npm run build
```

Le dossier `dist/` peut être déployé sur GitHub Pages.

## Firebase

Utilise le même projet Firebase que l’app Android (`m3notes-9712f`).

N’oublie pas d’activer :
- Authentication → Email/Password
- Firestore Database

## Structure

```
src/
├── components/   NoteCard
├── context/      Auth + Theme
├── pages/        Login, Home, Note
├── services/     notes.js
├── styles/
└── firebase.js
```
