import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD86Tg-7_Y5s6n2Q8B2JFmxN4thM41fUl8",
  authDomain: "zisan-top-up.firebaseapp.com",
  projectId: "zisan-top-up",
  storageBucket: "zisan-top-up.firebasestorage.app",
  messagingSenderId: "595218813915",
  appId: "1:595218813915:web:ab4a2628081b013f4e0dfe"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export { app, db, storage, auth };
