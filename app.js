"use strict";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".form-container p");
const btnSubmit = document.querySelector(".btn-submit");

const mediaQuery = window.matchMedia("(max-width: 687px)");

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value.match(regex)) {
    email.value = "";
    email.style.border = "1px solid var(--neutral-gray)";
    if (!errorMsg.classList.contains("hidden")) {
      errorMsg.classList.add("hidden");
    }
    if (mediaQuery.matches) {
      btnSubmit.style.marginTop = "0.75rem";
    }
  } else {
    errorMsg.classList.remove("hidden");
    email.style.border = "1px solid var(--secondary-red-lt)";
    if (mediaQuery.matches) {
      btnSubmit.style.marginTop = "2rem";
    }
  }
});
