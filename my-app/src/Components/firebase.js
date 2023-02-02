 import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA6gycCJX_67dFN_uHLD145vIG_BZ1FvBg",
  authDomain: "backend-38aec.firebaseapp.com",
  projectId: "backend-38aec",
  storageBucket: "backend-38aec.appspot.com",
  messagingSenderId: "303514305161",
  appId: "1:303514305161:web:b9da0e56db364f938f3c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firestore = getFirestore(app)



 