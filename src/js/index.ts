import "../css/style.css";

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const countDisplay = document.getElementById("counter");
let intCountDisplay = parseInt(countDisplay?.textContent || "0");
const reset = document.getElementById("reset");
const stepInput = document.getElementById("step") as HTMLInputElement | null;
const logList = document.getElementById("log-list");

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
  // カウントアップボタン
  increment?.addEventListener("click", () => {
    // カウントの上限
    if (intCountDisplay < 10) {
      intCountDisplay += stepInput ? parseInt(stepInput.value) : 1;
    }
    countDisplay!.textContent = intCountDisplay.toString();
    // ログを追加
    const logItem = document.createElement("li");
    logItem.textContent = `+${stepInput!.value.toString()}しました`
    logList?.appendChild(logItem);
  });
  // カウントダウンボタン
  decrement?.addEventListener("click", () => {
    // カウントの下限
    if (intCountDisplay > -10) {
      intCountDisplay -= stepInput ? parseInt(stepInput.value) : 1;
    }
    countDisplay!.textContent = intCountDisplay.toString();
    // ログを追加
    const logItem = document.createElement("li");
    logItem.textContent = `-${stepInput!.value.toString()}しました`;
    logList?.appendChild(logItem);
  });
  // リセットボタン
  reset?.addEventListener("click", () => {
    intCountDisplay = 0;
    countDisplay!.textContent = intCountDisplay.toString();
    // ログを追加
    const logItem = document.createElement("li");
    logItem.textContent = "リセットしました";
    logList?.appendChild(logItem);
  })
});