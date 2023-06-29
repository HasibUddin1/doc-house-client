// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDD3IHcDEG1Uu8kRQyfs0VZJGtthCUZGg",
  authDomain: "doc-house-project.firebaseapp.com",
  projectId: "doc-house-project",
  storageBucket: "doc-house-project.appspot.com",
  messagingSenderId: "987064956956",
  appId: "1:987064956956:web:751f7458e64ef942c4c7d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;