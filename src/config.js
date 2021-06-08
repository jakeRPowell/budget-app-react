import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBbPIuBR1GNAeOfaHjeqVe6JcPGspgche0",
  authDomain: "budget-app-2b89c.firebaseapp.com",
  projectId: "budget-app-2b89c",
  storageBucket: "budget-app-2b89c.appspot.com",
  messagingSenderId: "820083582599",
  appId: "1:820083582599:web:af9ce3c538d50833e23a22",
  measurementId: "G-WGKH78R156"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database);

export { base };
