const NINE_HOURS_MILLISECONDS = 32400000;

const timeTxt = document.querySelector(".time");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date().getTime();
  const distance = xmasDay - today;
  const numberSet = 1000 * 60 * 60 * 24;

  const day = Math.floor(distance / numberSet);
  const hour = Math.floor((distance % numberSet) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeTxt.innerHTML = `${day}d ${hour}h ${minutes}m ${seconds}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();