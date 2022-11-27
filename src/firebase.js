import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDvzERxbSQX-opUMce6UblNpzjsfddw_Hw",
  authDomain: "login-setup-7d8be.firebaseapp.com",
  projectId: "login-setup-7d8be",
  storageBucket: "login-setup-7d8be.appspot.com",
  messagingSenderId: "1017399866287",
  appId: "1:1017399866287:web:2ac7a1eca683bce873355a",
  measurementId: "G-6LDS975BRZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;