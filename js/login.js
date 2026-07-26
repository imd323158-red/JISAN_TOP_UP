import { auth } from "../firebase-config.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem("userUid", userCredential.user.uid);
    localStorage.setItem("userEmail", userCredential.user.email);

    alert("✅ Login Successful");

    window.location.href = "index.html";

  } catch (err) {

    alert("❌ " + err.message);

  }

});
