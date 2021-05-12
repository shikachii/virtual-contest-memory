import firebase from 'firebase';

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

const fi = firebase.initializeApp(config);
fi.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const auth = fi.auth();

export const db = fi.firestore();

export const fv = firebase.firestore.FieldValue;
