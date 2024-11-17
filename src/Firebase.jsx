import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDH7UokVoa7L4ohY2xwhk9AXDqNKRcFuek",
  authDomain: "loginsign-9e436.firebaseapp.com",
  projectId: "loginsign-9e436",
  storageBucket: "loginsign-9e436.firebaseapp.com",
  messagingSenderId: "268142694328",
  appId: "1:268142694328:web:521d8eaf2bd5876d9e494d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth}