import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqWOMUenx1ZdirQW8oRDFxcZrF_Ft6gzA",
  authDomain: "testapps-91ba7.firebaseapp.com",
  projectId: "testapps-91ba7",
  storageBucket: "testapps-91ba7.appspot.com",
  messagingSenderId: "406257652757",
  appId: "1:406257652757:web:51d97d7fe9c9908acc6a1c",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
