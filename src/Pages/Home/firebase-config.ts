import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDh8dx_DwwK_LL0s1dxbvFNmoMd1npt-WU",
  authDomain: "portfolio-db-481bb.firebaseapp.com",
  projectId: "portfolio-db-481bb",
  storageBucket: "portfolio-db-481bb.firebasestorage.app",
  messagingSenderId: "860600477357",
  appId: "1:860600477357:web:6bf770799968bf94c14824",
  measurementId: "G-0VWD8QFJ05"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore(app)