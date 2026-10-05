# M3Notes AI integration

This integration exposes only normal M3Notes notes to an AI client.

## Security boundary

The server is intentionally privileged because it uses the Firebase Admin SDK. Firestore Security Rules do not protect Admin SDK reads/writes, so the code itself enforces the boundary:

- The configured Firebase UID is fixed server-side.
- Every read starts from `notes` filtered by that UID.
- Any note with `isVault === true` is rejected before it is returned or modified.
- The API never reads `vaultMeta`.
- The API never reads Drive attachments.
- Create operations force `isVault: false`.
- Update operations re-read the target note and reject it if it belongs to another UID or is a vault note.
- Delete is intentionally not exposed in V1.
- Update operations save a history snapshot before changing the normal note.

## Endpoints

The `m3notesAiApi` function exposes:

- `GET /health`
- `GET /notes`
- `GET /notes/search?q=...`
- `GET /notes/:noteId`
- `POST /notes`
- `PATCH /notes/:noteId`

REST authentication uses `Authorization: Bearer <token>`.

The `m3notesMcp` function exposes the MCP endpoint at:

`https://<region>-<project>.cloudfunctions.net/m3notesMcp/<MCP_PATH_TOKEN>`

The path token is deliberately separate from the REST bearer token so the MCP URL can be configured as a no-auth custom app endpoint without placing a bearer secret in ChatGPT configuration.

## MCP tools

- `m3notes_list_notes`
- `m3notes_search_notes`
- `m3notes_get_note`
- `m3notes_create_note`
- `m3notes_update_note`

There is no delete tool.

## Secret configuration

Create one Firebase Secret Manager secret named `M3NOTES_AI_CONFIG` containing JSON:

```json
{
  "token": "long-random-rest-token",
  "mcpPathToken": "long-random-url-token",
  "userId": "YOUR_FIREBASE_UID"
}
```

Do not commit this JSON to Git.

Firebase 2nd gen functions support declarative secret parameters via `defineJsonSecret`. The deploy CLI will prompt for a missing secret value.

## Deployment

From the repository root:

```powershell
firebase deploy --only functions:m3notesAiApi,functions:m3notesMcp
```

The deployment requires a Firebase/Google Cloud project configuration capable of deploying Cloud Functions 2nd gen.

After deployment, Firebase prints both function URLs. The MCP URL is:

```
https://<region>-<project>.cloudfunctions.net/m3notesMcp/<MCP_PATH_TOKEN>
```

For ChatGPT custom MCP apps, configure that remote URL as the app endpoint.

## Important ChatGPT limitation

Full MCP write/modify actions in ChatGPT are currently available only to Business and Enterprise/Edu plans. Pro can connect custom MCPs for read/fetch in developer mode, but not full write/modify. Mobile ChatGPT does not provide the custom-app configuration UI; setup/testing is done on ChatGPT web.

If the account does not have a plan supporting MCP writes, this backend is still useful for the REST API and for other MCP-capable clients, but ChatGPT itself will not be able to create/update notes until an eligible ChatGPT workspace plan is used.

## Local verification

Install dependencies:

```powershell
cd functions
npm install
npm run check
```

The Firebase Functions emulator can then be used for local HTTP testing once `M3NOTES_AI_CONFIG` is provided locally.
