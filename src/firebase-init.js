import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbCChYNZifEfez46eZ5vBn3vHma3Cktqg",
  authDomain: "assignment-ten-a33e4.firebaseapp.com",
  projectId: "assignment-ten-a33e4",
  storageBucket: "assignment-ten-a33e4.appspot.com",
  messagingSenderId: "65761350487",
  appId: "1:65761350487:web:86a1267a3b288656eea412"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth