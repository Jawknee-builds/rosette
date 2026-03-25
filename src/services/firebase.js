// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Mock Firebase Config for structurally complete app
const firebaseConfig = {
  apiKey: "mock-api-key",
  authDomain: "rosette-mock.firebaseapp.com",
  projectId: "rosette-mock",
  storageBucket: "rosette-mock.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:mock123"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
