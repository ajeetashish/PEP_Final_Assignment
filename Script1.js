// JavaScript source code
let counter = 0;
const counterEl = document.getElementById("counter");

function updateCounter() {
    counterEl.textContent = counter;
    if (counter < 5) {
        counterEl.style.color = "green";
    } else if (counter < 10) {
        counterEl.style.color = "blue";
    } else {
        counterEl.style.color = "red";
    }
}

function increment() {
    if (counter < 10) {
        counter++;
        updateCounter();
    }
}

function decrement() {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
}

updateCounter();