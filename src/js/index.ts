import "../css/style.css";

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const countDisplay = document.getElementById("counter");
let intCountDisplay = parseInt(countDisplay?.textContent || "0");
const reset = document.getElementById("reset");
const stepInput = document.getElementById("step") as HTMLInputElement | null;

console.dir(decrement);
console.dir(stepInput);

// ステップ数に応じて入力ボタンのテキストを変更
if (decrement) {
  decrement.textContent = "-" + stepInput?.value.toString();
}
if (increment) {
  increment.textContent = "+" + stepInput?.value.toString();
}

// ステップ数の入力が変更されたときにボタンのテキストを更新
stepInput?.addEventListener("input", () => {
  if (decrement) {
    decrement.textContent = "-" + stepInput.value.toString();
  }
  if (increment) {
    increment.textContent = "+" + stepInput.value.toString();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  increment?.addEventListener("click", () => {
    intCountDisplay += stepInput ? parseInt(stepInput.value) : 1;
    countDisplay!.textContent = intCountDisplay.toString();
  });
  decrement?.addEventListener("click", () => {
    intCountDisplay -= stepInput ? parseInt(stepInput.value) : 1;
    countDisplay!.textContent = intCountDisplay.toString();
  });
  reset?.addEventListener("click", () => {
    intCountDisplay = 0;
    countDisplay!.textContent = intCountDisplay.toString();
  })
});