// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf6m60l0H5pvEYYITKidrArtpd9MGIwyQ",
  authDomain: "realtimechatapp-79271.firebaseapp.com",
  projectId: "realtimechatapp-79271",
  storageBucket: "realtimechatapp-79271.appspot.com",
  messagingSenderId: "347044555777",
  appId: "1:347044555777:web:0446e8570df0d156d32400",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
