// Import FirebaseConfig to use to initialize app
import config from "./config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Initialize Firebase,Auth,Database.
const app = initializeApp(config);
const auth= getAuth(app);
const database = getDatabase(app);

const fire = {app,auth,database}
export default fire;