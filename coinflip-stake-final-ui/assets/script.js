let selected = 'heads';
const flipBtn = document.getElementById("flipBtn");
const resultEl = document.getElementById("result");
const coinImg = document.querySelector(".coin-img");

document.getElementById("headsBtn").onclick = function () {
  selected = 'heads';
  setActive(this);
};
document.getElementById("tailsBtn").onclick = function () {
  selected = 'tails';
  setActive(this);
};

flipBtn.onclick = function () {
  resultEl.innerText = "Flipping...";
  coinImg.classList.add("spinning");

  setTimeout(() => {
    const result = Math.random() > 0.5 ? 'heads' : 'tails';
    const msg = result === selected ? 'You WON!' : 'You LOST.';
    resultEl.innerText = `Result: ${result.toUpperCase()} — ${msg}`;
    coinImg.classList.remove("spinning");
  }, 2000);
};

function setActive(button) {
  document.querySelectorAll(".button-group button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}
