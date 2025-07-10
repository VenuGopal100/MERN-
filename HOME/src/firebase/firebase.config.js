// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSI4gWWFWJKYv1Toivy1TDWbfTn4j40wk",
  authDomain: "bookstore-7f7da.firebaseapp.com",
  projectId: "bookstore-7f7da",
  storageBucket: "bookstore-7f7da.appspot.com",
  messagingSenderId: "941126195495",
  appId: "1:941126195495:web:c3beac96c56be5c95c7102",
  measurementId: "G-V7MBN6M5BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;