### 2.0 Your first JS Function
- ```console.log()```

	- ```console```이라는 **객체**의 ```log```라는 key 값을 가진 **함수**
- 인자 (argument)
	- 함수에 외부에 있는 데이터를 주는 방법

### 2.1 More Function Fun
- 백틱 -> 문자열 표현

	- ```console.log(`hello ${name}`)```
- ```return```
	- return이란 내가 돈을 내면 반드시 잔돈을 돌려받는다는 그런 개념
	```js
	function sayHello(name,age) {
		console.log(`hello ${name} you are ${age} years old`);
	}
	
	const greetNico = sayHello('nico',15);
	console.log(greetNico);
	// 출력 결과
	greetNico에서 undefined 출력
	```
	- greetNico는 sayHello함수의 결과 값

	```js
	function sayHello(name,age) {
		return `hello ${name} you are ${age} years old`;
	}
	
	const greetNico = sayHello('nico',15);
	```
	- undefined 안뜨고 console.log는 한번


- 객체안에서 함수 기능
	```js
	const calculator = {
		plus : function (a,b) { return a + b} 
	};
	// console.log()와 같은 형태의 calculator
	const plus = calculator.plus(5,5);
	console.log(plus)
	```

### 2.2 JS DOM Functions
- ```DOM```
	- Document Object Module
- js에서 html에 있는 모든 요소를 가져올 수 있고 그것을 객체로 바꿈

- document안에 수많은 객체들이 있음

### 2.3 Modifying the DOM with JS
- ```console.dir()```

- ```document.querySelector()```

	- document에서 가장 첫번째 노드를 반환


### 2.4 Events and event handlers
- js는 이벤트에 반응하기 위해 만들어짐

- ```window.addEventListener()```
	- submit 이벤트는 window에서 존재하지 않음
		- window는 제출할 수 없기 때문

		- form에서 존재
	- ```window.addEventListener('resize', handleResize);```
		- handleResize() 가 아닌 handleResize로 적어야함, 이벤트 리스너의 호출 방법
