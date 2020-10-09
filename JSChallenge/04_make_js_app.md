MAKE YOUR FIRST JS APP

### 3.0 Making a JS Clock part One
```js
function  getTime(){
	const date = new  Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTitle.innerText  =  `${hours} : ${minutes} : ${seconds}`
}
```

### 3.1 Making a JS Clock part Two
- ```setInterval(함수,시간)```

### #3.2 Saving the User Name part One
- ```localstorage()```

### 3.3 Saving the User Name part Two
