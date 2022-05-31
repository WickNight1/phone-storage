// Import the functions you need from the SDKs you need
import config from "./config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.APIKEY,
  authDomain: config.AUTHDOMAIN,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID
};

// Initialize Firebase,. Whole website should crash here if Firebase initialize did not work.
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const database = getDatabase(app);

const fire = {app,auth,database}
export default fire;