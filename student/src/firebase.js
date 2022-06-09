import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB3ykQtDHMzquTDPeMcVe_3vXY4bPG-QCM",
  authDomain: "authentication-dev-afd42.firebaseapp.com",
  projectId: "authentication-dev-afd42",
  storageBucket: "authentication-dev-afd42.appspot.com",
  messagingSenderId: "682097039016",
  appId: "1:682097039016:web:c52ae2251164c25123949d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

