const rangeInput = document.querySelector('.range-input'),
    rangeResult = document.querySelector('.range-result'),
    guessForm = document.querySelector('.guessNum-form'),
    guessInput = guessForm.querySelector('input'),
    gameResult = document.querySelector('.js-game-result'),
    guessTxt = gameResult.querySelector('.guess-num'),
    machineTxt = gameResult.querySelector('.machine-num'),
    resultTxt = gameResult.querySelector('.result-txt');
    

const SHOW_CN = 'showing'

// 랜덤 숫자와, 내가 추측한 값을 브라우저에 페인팅
function paintGameResult(guessNum,machineNum) {
    gameResult.classList.add(SHOW_CN);

    guessTxt.innerHTML = guessNum;
    machineTxt.innerHTML = machineNum;
}


// 게임 결과 함수
function showGameResult(guessNum,rangeNum) {
    let randomNum = Math.floor(Math.random() * (rangeNum + 1)); // 랜덤숫자

    // console.log('너의 random 숫자 결과다!!!!',randomNum);

    // 랜덤 숫자와, 내가 추측한 값을 페인팅하는 함수 호출
    paintGameResult(guessNum,randomNum);
    
    // 추측 숫자와 랜덤 숫자가 같을때
    if( guessNum == randomNum ) {
        resultTxt.innerHTML = 'You won! 🥳'

    // 다를때
    }else {
        resultTxt.innerHTML = 'You lost! 😫'
    }
}


// 추측하는 숫자를 입력하는 input 핸들러
function guessNumHandle(ev){
    ev.preventDefault();
    const guessNum = +guessInput.value; // 숫자타입으로 변경
    const rangeNum = +rangeInput.value;

    // console.log('너의 range 값이다!!!!!',rangeNum);
    // console.log('너의 추측 값이다!!!!!',guessNum);

    // 값을 입력했을때
    if( guessNum ){
        // 추측한 값이 지정한 범위 안에 있어야함 조건을 만족하면 함수 실행
        if( guessNum <= rangeNum ) {
        // 랜덤결과를 출력하는 함수 호출
        showGameResult(guessNum,rangeNum)
    
    // 그렇지 않으면 알림창!
        }else{
            alert(`지정한 범위 ${rangeNum} 이하만 입력해주세요!`);
        }
    }else{
        alert('값을 입력해주세요!')
    }
    

}


// 범위 지정하는 핸들러
function rangeHandle(ev) {
    const currentRange = ev.target.value;

    rangeResult.innerHTML = currentRange;

    
}


function init() {
    rangeInput.addEventListener('input',rangeHandle);
    guessForm.addEventListener('submit',guessNumHandle);
    
    // range 초기값 셋팅
    rangeResult.innerHTML = rangeInput.value;
}


init()