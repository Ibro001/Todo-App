import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67o540riAOvfZ-Ust8-FaNm2weLFApEE",
  authDomain: "todo-app-2fe7a.firebaseapp.com",
  projectId: "todo-app-2fe7a",
  storageBucket: "todo-app-2fe7a.appspot.com",
  messagingSenderId: "746122094294",
  appId: "1:746122094294:web:b84b5998f39e61359f8b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init firestore
export const db = getFirestore(app)


