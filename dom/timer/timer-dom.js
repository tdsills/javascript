console.log("time to start the timer!");
const time = document.querySelector("timer");

const timeButton = document.querySelector(".timer-buttons");
const start = timeButton.children[0];
const stop = timeButton.children[1];
const reset = timeButton.children[2];
let countdown = 59;

start.addEventListener("click", function () {
  let click = setInterval(function () {
    countdown--;
    time.textContent = `0:${countdown}`;
    if (countdown === 0) {
      clearInterval(click);
    }
  }, 1000);
  stop.addEventListener("click", function () {
    clearInterval(click);
  });
  reset.addEventListener("click", function () {
    clearInterval(click);
    coundown = 59;
    time.textContent = `0:${countdown}`;
  });
});
