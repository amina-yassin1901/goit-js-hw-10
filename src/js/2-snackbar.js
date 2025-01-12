
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delayInput = form.elements.delay;
    const stateInput = form.elements.state;

    const delay = Number(delayInput.value); 
    const state = stateInput.value; 

    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === "fulfilled") {
        resolve(delay); 
        } else {
        reject(delay); 
        }
    }, delay);
    });

    promise
    .then((delay) => {
        iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
        });
    })
    .catch((delay) => {
        iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
        });
    });
});

