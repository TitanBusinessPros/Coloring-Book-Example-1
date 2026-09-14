# Coloring-Book-Example-1

A browser-based coloring book (`index.html`, no build step) with draw/fill/erase/stamp tools and a Google sign-in. This is a duplicate of [TitanBusinessPros/Coloring-Book-App](https://github.com/TitanBusinessPros/Coloring-Book-App), wired to its own Firebase project instead of sharing one.

## Local files

- `index.html` — the app itself (UI, canvas drawing logic).
- `js/firebase-config.js` — Firebase project config (public client identifier, safe to commit).
- `js/firebase-auth.js` — Google sign-in via Firebase Authentication.
- `firebase.json`, `.firebaserc` — Firebase Hosting deploy config (Hosting is **not used** — see Hosting below; kept only in case it's ever wanted).
- `firestore.rules`, `storage.rules` — default-deny security rules (not used yet, just locked down).
- `manifest.json`, `sw.js` — PWA manifest and service worker, so the app is installable/offline-capable.

## Coloring page sections

`imageLibrary` in `index.html` holds one array per section button, sourced from Titan's existing public image repos (unchanged — this app shares that image library rather than duplicating the images):

1. Animals — `TitanBusinessPros/KCF-Animals`
2. Action — `TitanBusinessPros/KCF-Cars-Trucks`
3. Fantasy — `TitanBusinessPros/KCF-Fantasy`
4. Holidays & Events — `TitanBusinessPros/KCF-Holidays`
5. Foods — `TitanBusinessPros/CBA-CBP`, `Food/` folder
6. Professions — `TitanBusinessPros/CBA-CBP`, `Professions/` folder

Each image is referenced by a public `raw.githubusercontent.com` URL (via the
`github.com/.../raw/main/...` redirect form) — no images are committed into
this repo itself.

## Firebase project for this app

- **Project name:** Coloring-Book-Example-1
- **Project ID:** `coloring-book-example-1`
- **Project number:** `1038492005185`
- **Used for:** Google Sign-In (Firebase Authentication) only — Hosting is not used, this app is served entirely from GitHub Pages.

One-time setup (Google sign-in method enabled, Web app registered and its
config pasted into `js/firebase-config.js`, `titanbusinesspros.github.io`
added as an authorized domain) is complete.

## Hosting

**GitHub Pages is the sole live host:** https://titanbusinesspros.github.io/Coloring-Book-Example-1/
— it rebuilds automatically on every push to `main`.

Firebase Hosting is intentionally not set up for this project — only Firebase Authentication (Google Sign-In) is used, matching the current setup on the original Coloring-Book-App.
