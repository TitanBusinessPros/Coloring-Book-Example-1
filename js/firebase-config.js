// Firebase project config for the Coloring Book App.
//
// This object is safe to commit/publish — it's a public client identifier,
// not a secret (access is controlled by Firebase Auth + security rules,
// and by restricting the API key to this app's domains in Google Cloud).
//
// Firebase project: coloring-book-example-1 (project number 1038492005185).
//
// TODO: apiKey, appId, and measurementId below are still placeholders —
// they can't be guessed from the project number. Get the real ones from:
// Firebase Console -> Project settings -> General -> "Your apps" -> add a
// Web app (if none exists yet) -> SDK setup and configuration -> Config.
// Also enable Authentication -> Sign-in method -> Google, and add this
// site's domain under Authentication -> Settings -> Authorized domains.
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "coloring-book-example-1.firebaseapp.com",
  projectId: "coloring-book-example-1",
  storageBucket: "coloring-book-example-1.firebasestorage.app",
  messagingSenderId: "1038492005185",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID"
};
