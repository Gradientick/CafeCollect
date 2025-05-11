import { initializeApp } from "firebase/app";
import { getAuth }      from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD1bXHmMm-eW6CFWIUxWJphPG19J_DmWI",
    authDomain: "cafecollect-ee0bd.firebaseapp.com",
    projectId: "cafecollect-ee0bd",
    storageBucket: "cafecollect-ee0bd.firebasestorage.app",
    messagingSenderId: "1020143336055",
    appId: "1:1020143336055:web:39b1975d05869ad1626472",
    measurementId: "G-LCSDVZRPS9"
  };

const app    = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);