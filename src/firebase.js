// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT-mD5tP9M-EdprrltLb5icTx9KT4rw0M",
  authDomain: "enoverlab-eec5c.firebaseapp.com",
  projectId: "enoverlab-eec5c",
  storageBucket: "enoverlab-eec5c.appspot.com",
  messagingSenderId: "294018333891",
  appId: "1:294018333891:web:c9fac477e8187aa1877676",
  measurementId: "G-13E0THCLE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);