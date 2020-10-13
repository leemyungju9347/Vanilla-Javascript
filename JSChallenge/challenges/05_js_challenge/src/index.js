const todoForm = document.querySelector('.js-todoForm');
const todoInput = todoForm.querySelector('input');
const pendingList = document.querySelector('.pending-area > ul')
const finishedList = document.querySelector('.finished-area > ul');


let pendingtoDos = [];
let finishedtoDos = [];

const PENDING_LS = 'PENDING';
const FINISHED_LS = 'FINISHED';

const pending_pm = 'pending';
const finished_pm = 'finished'

// 로컬스토리지에 저장
function saveToDos(position){
    // pending일 경우
    if( position === pending_pm ) {
        localStorage.setItem(PENDING_LS,JSON.stringify(pendingtoDos));

    // finished일 경우
    }else{
        localStorage.setItem(FINISHED_LS,JSON.stringify(finishedtoDos));
    }
    
}

// 삭제 버튼
function deleteHandle(ev) {
    const btn = ev.target;
    const li = btn.parentNode;

    pendingList.removeChild(li);

    const cleanTodos = pendingtoDos.filter(item=>{
        return item.id !== parseInt(li.id)
    })

    pendingtoDos = cleanTodos;

    cleanToDosIndex(pending_pm)

    saveToDos(pending_pm)
}

function deleteFinishedHandle(ev) {
    const btn = ev.target;
    const li = btn.parentNode;

    finishedList.removeChild(li);

    const cleanTodos = finishedtoDos.filter(item=>{
        return item.id !== parseInt(li.id)
    })

    finishedtoDos = cleanTodos;

    cleanToDosIndex(finished_pm)

    saveToDos(finished_pm)
}

// 완료버튼 
function finishedHandle(ev) {
    const btn = ev.target;
    const li = btn.parentNode;
    const index = li.id - 1;
    const text = pendingtoDos[index].text;

    paintFinishedTodo(text);

    pendingList.removeChild(li);

    const cleanToDos = pendingtoDos.filter(item => {
        return item.id !== parseInt(li.id)
    })

    pendingtoDos = cleanToDos;
    
    cleanToDosIndex(pending_pm)

    saveToDos(pending_pm)
    
}

// 되돌리기 버튼
function restoreHandle(ev) {
    const btn = ev.target;
    const li = btn.parentNode;
    const index = li.id - 1;
    const text = finishedtoDos[index].text;

    paintPendingTodo(text);

    finishedList.removeChild(li);

    const cleanToDos = finishedtoDos.filter(item =>{
        return item.id !== parseInt(li.id)
    })

    finishedtoDos = cleanToDos;

    cleanToDosIndex(finished_pm);

    saveToDos(finished_pm);
}

// 삭제, 이동 했을 경우 id 값을 정리해주는 함수
function cleanToDosIndex(position) {
    // pending
    if( position === pending_pm ) {
        const lis = pendingList.querySelectorAll('li');

        pendingtoDos.forEach((item,index)=>{
            item.id = index + 1;
            lis[index].id = item.id
        })
    

    // finished
    }else {
        const lis = finishedList.querySelectorAll('li');
        
        finishedtoDos.forEach((list,idx)=>{
            list.id = idx + 1;
            lis[idx].id = list.id
        })
    }
}

// pending 영역 페인팅
function paintPendingTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const finishedBtn = document.createElement('button');
    const newId = pendingtoDos.length + 1;

    span.innerHTML = text;
    deleteBtn.innerHTML = '❌'
    finishedBtn.innerHTML = '✅'

    li.id = newId

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(finishedBtn);

    pendingList.appendChild(li);

    deleteBtn.addEventListener('click',deleteHandle)
    finishedBtn.addEventListener('click',finishedHandle)

    const toDoObj = {
        text: text,
        id: newId
    }

    pendingtoDos.push(toDoObj);

    saveToDos(pending_pm)

}

// finished 영역 페인팅
function paintFinishedTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const restoreBtn = document.createElement('button');
    const newId = finishedtoDos.length + 1;

    span.innerHTML = text;
    deleteBtn.innerHTML = '❌';
    restoreBtn.innerHTML = '⏪';


    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(restoreBtn);

    li.id = newId

    deleteBtn.addEventListener('click',deleteFinishedHandle);
    restoreBtn.addEventListener('click',restoreHandle);


    finishedList.appendChild(li);

    const toDoObj = {
        text : text,
        id: newId
    }

    finishedtoDos.push(toDoObj)
    saveToDos(finished_pm)

}

// 할일 입력 
function submitHandle(ev) {
    ev.preventDefault();
    const currentValue = todoInput.value;

    // 값이 있으면
    if( currentValue ) { 
        paintPendingTodo(currentValue) // 브라우저에 그려주기
        todoInput.value = ''

    }else {
        alert('할일을 입력해주세요!')
    }
}

// 첫로드시 로컬스토리지에서 todolist를 가져오는 함수
function loadTodoList(position) {
    const loadedPendingTodo = localStorage.getItem(PENDING_LS);
    const loadedFinishedTodo = localStorage.getItem(FINISHED_LS);

    // pending
    if( position === pending_pm ) {
        if( loadedPendingTodo !== null ){
            const parsedPendingTodo = JSON.parse(loadedPendingTodo);

            parsedPendingTodo.forEach(item => {
                paintPendingTodo(item.text)
            });
    }

    //finished
    }else{
        if( loadedFinishedTodo !== null ) {
            const parsedFinishedTodo = JSON.parse(loadedFinishedTodo);
    
            parsedFinishedTodo.forEach(item => {
                paintFinishedTodo(item.text)
            })
        }

    }
}

function init() {
    todoForm.addEventListener('submit',submitHandle);
    loadTodoList(pending_pm)
    loadTodoList(finished_pm)
}


init()