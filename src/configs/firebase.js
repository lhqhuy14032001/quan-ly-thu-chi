import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDnM6V2HsxdBqgNJ9Bs26Iie8aa-z5SIgU",
  authDomain: "quan-ly-thu-chi-b9897.firebaseapp.com",
  projectId: "quan-ly-thu-chi-b9897",
  storageBucket: "quan-ly-thu-chi-b9897.appspot.com",
  messagingSenderId: "36456185173",
  appId: "1:36456185173:web:ef4149890920693f8f43dc",
  measurementId: "G-BDFEJQ2NQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const fireStoreCore = getFirestore(app);

export { fireStoreCore };
