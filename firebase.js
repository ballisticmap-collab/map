// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1_XR1kVE7CjlRSyA-P7hbd3iki5bS8Bo",
  authDomain: "bali-4a721.firebaseapp.com",
  databaseURL: "https://bali-4a721-default-rtdb.firebaseio.com",
  projectId: "bali-4a721",
  storageBucket: "bali-4a721.firebasestorage.app",
  messagingSenderId: "173399861604",
  appId: "1:173399861604:web:32fd8dbc7907330ba13271",
  measurementId: "G-RE0F2J1GK5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
  db,
  ref,
  set,
  update,
  push,
  remove,
  onValue
};
