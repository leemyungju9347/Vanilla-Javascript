const buttons = document.querySelectorAll('button');
const input = document.querySelector('.number-input');


let oldNum = '';
let newNum = '';
let resultNum = '';
let totalResult = 0

let equalsCheck = true;
let operCheck = true;
let inputReset = true;
let culcEqualsStatus = true;

// 연산자 함수
function operator(value) {
    // 두번클릭 or 맨처음 연산자 버튼 눌렀을때 에러 방지
    if(operCheck) {
        if(resultNum == '' ) return;
        resultNum = totalResult + value
        console.log('result!!!!!!!!!!!!!!!!!!!!!😍',resultNum);
        return
    }
 
    oldNum = input.value;
    resultNum += oldNum + value;

    // 계산한 값을 계속 업데이트해주기 위한 변수
    const middleResult = eval(resultNum.substr(0,resultNum.length - 1));
    input.value = middleResult;

    operCheck = true;
    inputReset = true;
    culcEqualsStatus = false;
}

function paintingNum(number) {
    // 첫 실행때, 리셋할 값이 없을때,
  // equalsCheck ==> 새로운 값 추가할때 새롭게 리셋해주기 위해 설정
    if( oldNum == '' && equalsCheck ){
        input.value = number;
        newNum += number;

        // input 값 계속 추가하기 위해 설정
        equalsCheck = false;
        inputReset = false;

    // 두번째 실행
    }else {
        // input 값 리셋
        if( inputReset ){
            input.value = ''
            newNum = ''
            input.value += number;

            inputReset = false;
        // 그냥 더해줌
        }else{
            input.value += number;
        }
        
        newNum += number;

    }
    // 연산자들 사용하기 위해서 false값으로 바꿔줌
   operCheck = false;
   culcEqualsStatus = false;
}

function clearNumber(){
    culcReset()

    input.value = '0';
    resultNum = '';
    equalsCheck = true;
    operCheck = true;
    culcEqualsStatus= true;
}


function culcEquals() {
    if (culcEqualsStatus) return; // equals button 눌렀을때 발생하는 에러 방지

    // operCheck가 true일때 ==> 연산자 두번클릭 문제 방지
    if( operCheck ) {
        totalResult = eval(resultNum.substr(0,resultNum.length - 1));
        input.value = totalResult;
    
    // operCheck가 false일때
    }else {
        resultNum += newNum; // 새로운 값과 그동안 쌓인 값 계산
        totalResult = eval(resultNum);
        input.value = totalResult;
    }


    equalsCheck = true;
    operCheck = true; // 연산자 에러 방지를 위해 true로 바꿔줌

    culcReset();

    culcEqualsStatus = true;

}

// reset
function culcReset() {
    oldNum = '';
    newNum = '';
}


function culcHandler(ev) {
    const dataType = ev.target.dataset.type;
    const clickValue = ev.target.innerText;

    switch (dataType) {
        case 'operator':
            operator(clickValue);
            break;
        
        case 'equals':
            culcEquals()
            break;
        
        case 'ac':
            clearNumber()
            break;
    
        default:
            paintingNum(clickValue);
            break;
    }

}

function init() {
    buttons.forEach(btn=> btn.addEventListener('click', culcHandler));
}   

init();