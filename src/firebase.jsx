// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXs93rIgK_RYbEosVdmmwKDqn-_W8oLE",
  authDomain: "neighborhood-medical-309f1.firebaseapp.com",
  projectId: "neighborhood-medical-309f1",
  storageBucket: "neighborhood-medical-309f1.appspot.com",
  messagingSenderId: "904680421467",
  appId: "1:904680421467:web:491e3b729910eab9cb277e",
  measurementId: "G-RSP01ZJWGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage = getStorage(app);