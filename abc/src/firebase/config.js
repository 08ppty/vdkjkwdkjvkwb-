import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA-lRGcLJ1fYu2KHOiRFnB7KFkW4GzNaSo"
  ,
  authDomain: "com.company.applica",
  projectId: "testapi-44bc9",
  storageBucket: "testapi-44bc9.appspot.com",
  messagingSenderId: "1025432730724",
  appId: "1:1025432730724:android:dfbd1af759fb4c6deb7371",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
