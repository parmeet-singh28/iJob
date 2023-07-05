import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB0mmPnvp-0144c15mKokPXgsSkbkgq1Pg",
  authDomain: "nextjs-tutorial-main.firebaseapp.com",
  projectId: "nextjs-tutorial-main",
  storageBucket: "nextjs-tutorial-main.appspot.com",
  messagingSenderId: "49202555310",
  appId: "1:49202555310:web:7afaa4995659b9b488003f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
