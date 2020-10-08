### 2.5 If, else, and, or
- ```&&```연산자
	- 둘다 참일때 true, 둘 중 하나라도 참이 아니면 false
	```js
		true && true = true;
		true && false = false;
		false && true = false;
		false && false = false
	```
- ```||```연산자
	```js
	true || true = true;
	true || false = true;
	false || true = true;
	false || false = false;
	```
### 2.6 DOM - If else - Function practice
- **```window.addEventListener ('offline')```**

	- wifi 인터넷이 끊기면 동작하는 이벤트
	```js
	funcion handleOffline(){
		console.log('lalala')
	}
	window.addEventListener('offline',handleOffline);
	```
- **```window.addEventListener ('online')```**
	- 인터넷이 동작하면 이벤트가 실행됨

### 2.7 DOM - If else - Function practice Two
- ```toggle()```
	- 클래스가 있는지 체크하고 클래스가 있으면 ```add``` 없으면 ```remove```

	```js
	const CLICKED_CLASS = 'clicked';
	 
	function handleClick(){
		title.classList.toggle(CLICKED_CLASS)
	}
	```
