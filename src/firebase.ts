import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVj01iRUm9mujPcQjJ1443QcXSHaJzUAA",
  authDomain: "nwitter-reloaded-69553.firebaseapp.com",
  projectId: "nwitter-reloaded-69553",
  storageBucket: "nwitter-reloaded-69553.firebasestorage.app",
  messagingSenderId: "28034761370",
  appId: "1:28034761370:web:f044cf94e2ef13593b9523",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
