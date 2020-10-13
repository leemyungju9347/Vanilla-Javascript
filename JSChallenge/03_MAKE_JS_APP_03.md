### 3.8 Getting the Weather part One Geolocation
- ```navigator```
	- 위치정보를 불러오는 API

	- 그외의 document, window
	- ```navigator.geolocation.getCurrentPosition```

- ```navigator.vibrate```


- 객체 이름이 같을때
	```js
	const coordsObj = {
		latitude,
		longtitude
	}
	```

### 3.9 Getting the Weather part Two API
- API 는 특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해서 고안된 것

- ```js
	fetch(`${api  주소}`).then()
	```
	api 주소가 fetch가 완료된 후 then을 동작

- ```Pormise { <pending> }```

	- 대기상태, 가져온 데이터를 처리중

- response 불러오는 과정
	```js
	// response가 아직 준비가 안되어있기 때문에 return
	.then(function(response){
		return  response.json();
	
	// 준비완료 되면 데이터를 받기위해 then
	}).then (function(json){
		console.log(json)
	})
	```
