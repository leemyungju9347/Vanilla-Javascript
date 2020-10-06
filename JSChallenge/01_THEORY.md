### 1.0 Why JS?

### 1.1 Super Powers of JS
- Socket.io
- Nomad Movies
- impactJs
- world draw
	- https://world-draw.appspot.com/
- thress js 
	- 자바스크립트 3D라이브러리
	- https://threejs.org/


### 1.2 ES5, ES6 ES....WTF!?!?!
- ECMAScript
	- specification에대한 설명
	- ES5와 동일
- specification이란 ?
	- js는 중앙집중화되어있음.
	- 그러므로 누군가 업데이트를 하면 모든 브라우저에서 작동하게됨
	- 설명문 안내책자 같은 역할
- 브라우저
	- 크롬,파이어폭스,익스플로러 등 specification을 받아서 자신의 방식대로 실행하는 것

### 1.3 VanillaJS (07:09)#1.4 Hello World with Javascript
### 1.5 What are we learning

### 1.6 Your first JS Variable(변수!)
- 모든 instructions는 각 다른 lines에 있음
- lines === expressions
- 모든 expressions는 한줄에 있어야함
- expre가 끝나면 세미콜론

### 1.7 let, const, var
- 변수 선언 순서
	```
	1. create
	2. 초기화(init)
	3. use
	```
- 변수는 가변적
- js 코드 실행 순서 from top -> bottom


### 1.8 Data Type on JS
- 주석
- 변수를 선언할때 기본적으로 ```const``` 사용
	- 필요할때만 ```let``` 사용
- string 
	- string is put together == 모든 것을 같이 붙이는 것
- boolean
	- true or false
	- true = 1;
	- false = 0;
- number
- float
	- 소수점이 있는 숫자
	- ```const what = 55.1```


### 1.9 Organizing Data with Arrays
- 데이터 타입 정렬
	- array
	- object

- js 문법 작성 규칙
	- ```daysOfWeek``` 같은 camel case로 작성
	- 소문자로 시작 스페이스대신에 대문자로 작성
	- js는 스페이스 사용 x

### 1.10 Organizing Data with Objects
- object
	- key : value 형태
- 객체 자체의 값을 바꾸는 것은 안됨
- 객체안의 value값을 바꾸는 것만 허용
- 객체안에서 배열형태 가능
- 배열안에서 객체형태 가능
```js
const nicoInfo = {
	...
	favMovies : ["movie01","movie02"],
	favFood : [
		{
			name : 'kimchi',
			fatty : false
		},
		{
			name : 'burger',
			fatty :true
		}
	]

}
```
