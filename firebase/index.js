import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

let config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
console.log("Running ...");

const auth = firebase.auth();

export { auth, db, firebase };
