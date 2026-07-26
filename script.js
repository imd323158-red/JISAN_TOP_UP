import { db } from "../firebase/firebase-config.js";
document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".buy-btn");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const card = button.parentElement;

      const packageName = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText.replace("৳", "").trim();

      window.location.href =
        `payment.html?package=${encodeURIComponent(packageName)}&price=${encodeURIComponent(price)}`;

    });

  });

});