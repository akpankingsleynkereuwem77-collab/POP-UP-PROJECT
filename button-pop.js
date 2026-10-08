"use strict";

const openButton = document.getElementById("openPopup");
const popup = document.getElementById("welcomePopup");
const closeButton = document.getElementById("closePopup");
const doneButton = document.getElementById("donePopup");

if (!(openButton instanceof HTMLButtonElement)) {
    throw new Error('Expected a button with id "openPopup".');
}

if (!(popup instanceof HTMLDialogElement)) {
    throw new Error('Expected a dialog with id "welcomePopup".');
}

if (!(closeButton instanceof HTMLButtonElement)) {
    throw new Error('Expected a button with id "closePopup".');
}

if (!(doneButton instanceof HTMLButtonElement)) {
    throw new Error('Expected a button with id "donePopup".');
}

let closeTimer;

const closePopup = () => {
    if (!popup.open || popup.classList.contains("is-closing")) {
        return;
    }

    popup.classList.add("is-closing");
    closeTimer = window.setTimeout(() => {
        popup.classList.remove("is-closing");
        popup.close();
    }, 180);
};

openButton.addEventListener("click", () => {
    if (!popup.open) {
        popup.showModal();
    }
});

closeButton.addEventListener("click", closePopup);
doneButton.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

popup.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePopup();
});

popup.addEventListener("close", () => {
    window.clearTimeout(closeTimer);
    popup.classList.remove("is-closing");
});
