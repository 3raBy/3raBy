let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let Seconds = document.querySelector(".seconds");
function count() {
  let currentSecond = parseInt(Seconds.textContent, 10);
  let currentMin = parseInt(minutes.textContent, 10);
  let currentHours = parseInt(hours.textContent, 10);
  let currentDays = parseInt(days.textContent, 10);
  currentSecond--;
  if (currentSecond < 0) {
    currentSecond = 59;
    // Seconds.textContent = 0;
    currentMin--;
  }
  if (currentMin < 0) {
    currentMin = 59;
    //   minutes.textContent = 0;
    currentHours--;
  }
  if (currentHours < 0) {
    currentHours = 0;
    //   hours.textContent = 0;
    currentDays--;
  }
  if (currentDays < 0) {
    currentDays = 0;
  }
  if (
    currentHours <= 0 &&
    currentMin <= 0 &&
    currentSecond <= 0 &&
    currentDays <= 0
  ) {
    clearInterval(counter);
    currentHours = 0;
    currentMin = 0;
    currentSecond = 0;
    currentDays = 0;
  }
  Seconds.textContent = String(currentSecond).padStart(2, "0");
  minutes.textContent = String(currentMin).padStart(2, "0");
  hours.textContent = String(currentHours).padStart(2, "0");
  days.textContent = currentDays;
}
let counter = setInterval(count, 1000);

window.onload = function () {
  let btn = document.querySelector(".scroll-up");
  window.onscroll = function () {
    if (scrollY >= 200) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };
  o;
};
