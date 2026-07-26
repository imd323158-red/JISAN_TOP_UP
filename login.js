import { app } from "../firebase/firebase-config.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Login Successful");

    window.location.href = "index.html";

  } catch (error) {

    alert("❌ " + error.message);

  }

});