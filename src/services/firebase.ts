import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTOSMhSAH1ZAp_Akoe2-Jn6jZbIqx9TCk",
  authDomain: "instagram-d534e.firebaseapp.com",
  projectId: "instagram-d534e",
  storageBucket: "instagram-d534e.appspot.com",
  messagingSenderId: "676808198167",
  appId: "1:676808198167:web:09908d82fe199910cfb452",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
