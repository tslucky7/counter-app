import "../css/style.css";

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const countDisplay = document.getElementById("counter");
let intCountDisplay = parseInt(countDisplay?.textContent || "0");
const reset = document.getElementById("reset");
const stepInput = document.getElementById("step") as HTMLInputElement | null;

console.log(intCountDisplay);
console.log(decrement);
console.log(increment);
console.log(reset);



document.addEventListener("DOMContentLoaded", () => {
  increment?.addEventListener("click", () => {
    intCountDisplay++;
    countDisplay!.textContent = intCountDisplay.toString();
  });
  decrement?.addEventListener("click", () => {
    intCountDisplay--;
    countDisplay!.textContent = intCountDisplay.toString();
  });
  reset?.addEventListener("click", () => {
    intCountDisplay = 0;
    countDisplay!.textContent = intCountDisplay.toString();
  })
});