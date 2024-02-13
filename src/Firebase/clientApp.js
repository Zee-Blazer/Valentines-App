// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUMa7KZI_Ni4qZjgLvdbvCVsqDmiu4TH0",
  authDomain: "valentines-messaging-app.firebaseapp.com",
  projectId: "valentines-messaging-app",
  storageBucket: "valentines-messaging-app.appspot.com",
  messagingSenderId: "648243254759",
  appId: "1:648243254759:web:2f29d3552a009591485942",
  measurementId: "G-VE943DMYEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
