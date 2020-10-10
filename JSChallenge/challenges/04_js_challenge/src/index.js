// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selectBox = document.querySelector(".js-selectBox");
const selectTxt = document.querySelector(".js-select-txt");

// 로컬스토리지 이름 변수
const COUNTRYNM_LS = "country";

// html 저장 함수
function paintTxt(text) {
  selectTxt.innerHTML = `I'm from ${text}.`;
  selectBox.value = text;
}

// 로컬스토리지에 나라 저장
function saveContry(text) {
  localStorage.setItem(COUNTRYNM_LS, text);
}

// change 이벤트 함수
function contrySctHandle(ev) {
  const currentValue = ev.target.value;

  paintTxt(currentValue);
  saveContry(currentValue);
}

// 첫 로드시 실행 함수
function loadCountry() {
  const currentValue = localStorage.getItem(COUNTRYNM_LS); // 로컬스토리지 값을 가져와서

  // 값이 있을때 저장
  if (currentValue) {
    paintTxt(currentValue);
  }
}

function init() {
  selectBox.addEventListener("change", contrySctHandle);
  loadCountry();
}

init();
