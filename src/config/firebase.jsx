// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLvIWMW99VV8daKjxIRENT9UIj587_agA",
  authDomain: "ebilivie-farm.firebaseapp.com",
  databaseURL: "https://ebilivie-farm-default-rtdb.firebaseio.com",
  projectId: "ebilivie-farm",
  storageBucket: "ebilivie-farm.firebasestorage.app",
  messagingSenderId: "140257134943",
  appId: "1:140257134943:web:7695b6c9b3dbd8dac34eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;