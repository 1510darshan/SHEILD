// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7kutjWs1BRddCrdxE6-q60HACSl4n9-Y",
  authDomain: "sheild-bd2e1.firebaseapp.com",
  projectId: "sheild-bd2e1",
  storageBucket: "sheild-bd2e1.firebasestorage.app",
  messagingSenderId: "315301563916",
  appId: "1:315301563916:web:1ce97daeefe414c4eea829",
  measurementId: "G-7L454H1EYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;