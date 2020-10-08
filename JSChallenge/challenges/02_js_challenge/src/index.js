const body = document.querySelector("body");
// 보라 #914EAC
// 노랑 #EEBC12
// 하늘 #2D8ED6

function resizeHandle() {
  backColorChange();
}

function backColorChange() {
  const winSize = window.innerWidth;
  if (winSize >= 1000) {
    body.style.backgroundColor = "#EEBC12";
  } else if (winSize >= 700) {
    body.style.backgroundColor = "#914EAC";
  } else {
    body.style.backgroundColor = "#2D8ED6";
  }
}

function init() {
  window.addEventListener("resize", resizeHandle);
  backColorChange();
}

init();