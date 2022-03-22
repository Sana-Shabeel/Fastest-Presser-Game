const clickS = document.querySelector(".click-s");
const clickL = document.querySelector(".click-l");
const displayS = document.querySelector(".s-count");
const displayL = document.querySelector(".l-count");
const timer = document.querySelector("#timer");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const countdownDisplay = document.querySelector(".countdown-timer");
const body = document.querySelector("body");
let Scount = 0;
let Lcount = 0;

// handlers
function clickHandler(e) {
  if (e.key === "l") {
    clickL.classList.toggle("l-hover");
    displayL.textContent = Lcount++;
  }
  if (e.key === "s") {
    clickS.classList.toggle("s-hover");
    displayS.textContent = Scount++;
  }
}
// styling functions
function style(winner, color) {
  countdownDisplay.fontSize = "10px";
  countdownDisplay.style.fontFamily = "'Vast Shadow', cursive";
  countdownDisplay.textContent = winner;
  body.style.background = color;
}
// the presser function
function presser(delay) {
  document.addEventListener("keydown", clickHandler);

  //  the countdown
  let countdown = delay * 10;
  const interval = setInterval(() => {
    countdownDisplay.textContent = countdown--;
  }, 100);

  setTimeout(() => {
    document.removeEventListener("keydown", clickHandler);

    // stopping the countdown
    clearInterval(interval);
    //
    if (Lcount > Scount) {
      style("L WINS 🎉", "#ffd32d");
    } else if (Lcount == Scount) {
      style("NO ONE WINS", "#141e27");
    } else if (Scount > Lcount) {
      style("S WINS 🎉", "#d32dff");
    }
  }, delay * 1000);
}
restart.addEventListener("click", () => {
  Scount = 0;
  Lcount = 0;
  displayS.textContent = 0;
  displayL.textContent = 0;
  body.style.background = "#141e27";
  timer.value = null;
  countdownDisplay.textContent = "000";
});
// Bigger screens
start.addEventListener("click", () => {
  presser(timer.value);
});
