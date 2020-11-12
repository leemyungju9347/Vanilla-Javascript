const buttons = document.querySelectorAll('button');
const resultInput = document.querySelector('.number-input');

let firstValue = '',
    firstCheck,
    secondValue = '',
    secondCheck,
    currentOperation,
    resultCheck
    


function doCalculate() {
    const intFirstValue = parseInt(firstValue,10);
    const intSecondValue = parseInt(secondValue,10);

    console.log('여기는 calculate-zone first🤩',intFirstValue);
    console.log('여기는 calculate-zone second🤩',intSecondValue);
    console.log('여기는 calculate-zone currentOperation🤩',currentOperation);

    switch (currentOperation) {
        case '+':
            return intFirstValue + intSecondValue;

        case '-':
            return intFirstValue - intSecondValue;
        
        case '*':
            return intFirstValue * intSecondValue;

        case '/':
            return intFirstValue / intSecondValue;
    
        default:
            return;
    }

}


function culcResult() {
    const culcResult = doCalculate();
    resultInput.value = culcResult;
    firstValue = culcResult;
    secondValue = '';
    secondCheck = false;

    console.log('resultZone에서 first',firstValue);
    console.log('resultZone에서 second',secondValue);
}


function clickOperation(operation) {
    const currentOper = operation;
    

    if( !firstCheck && firstValue ) {
        console.log('firCheck 없음!!');
        firstCheck = true;
    }

    if( firstCheck && secondCheck ) {
        culcResult()
    }

    currentOperation = currentOper;

    console.log('연산자 클릭했을때 first',firstValue,firstCheck);
    console.log('연산자 클릭했을때 second',secondValue,secondCheck);
    console.log('현재 연산자는????',currentOperation);

}

function clickNumber(number) {
    const currentNum = number;

    // 첫시작
    if( !firstCheck ) {
        // 리셋을 하고 난뒤 first에 값이 있을때
        if( firstValue === '0' ) {

            console.log('첫번째 눌렀는데 값이 있다!?!?!? + 리셋ver 🤑');
            firstValue = '';
            firstValue += number;
            resultInput.value = firstValue

        
        // 아예 처음시작일때
        }else {

            console.log('첫번째 눌렀는데 값이 없다!?!?!? + 맨~처음ver 😴');
            firstValue += currentNum
            resultInput.value = firstValue


        }
        
        console.log('첫번쨰!!!!! firstValue ===>', firstValue,firstCheck);
        console.log('첫번쨰!!!!! secondValue ===>', secondValue,secondCheck);
        console.log('첫번쨰!!!!! currentOperation ===>', currentOperation);

    }else{
        secondValue += currentNum;
        resultInput.value = secondValue;
        secondCheck = true;

        console.log('두번째!!!!! firstValue ===>', firstValue,firstCheck);
        console.log('두번째!!!!! secondValue ===>', secondValue,secondCheck);
        console.log('두번째!!!!! currentOperation ===>', currentOperation);
    }

}



function clickReset() {
    firstCheck = false;
    secondCheck = false;
    firstValue = '0';
    secondValue = '';
    currentOperation = null;
    resultInput.value = '0';

    console.log('여긴 reset존!!!! first',firstValue,firstCheck);
    console.log('여긴 reset존!!!! second',secondValue,secondCheck);

}

function clickEquals() {
    
    if( firstCheck && secondCheck ) {
        console.log('Equals 맞다면!!! culc실행');
        culcResult();
    }else {
        console.log('Equals 아니라면?? 아무것도 실행하지 x');
        console.log('여긴 이퀄즈 fitst',firstValue,firstCheck);
        console.log('여긴 이퀄즈 second',secondValue,secondCheck);
    }
}


function btnClickHandle(ev) {
    const dataType = ev.target.dataset.type;
    const currentValue = ev.target.innerText;

    switch (dataType) {
        case 'operator':
            clickOperation(currentValue)
            break;
        case 'equals':
            clickEquals()
            break;

        case 'ac':
            clickReset()
            break;
  
        default:
            clickNumber(currentValue)
            break;
    }
}

function init() {
    buttons.forEach(el=>{
        el.addEventListener('click',btnClickHandle)
    })
}

init()