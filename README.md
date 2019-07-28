# Checkbox Component
## 1. 사용방법
### 1.1. 스크립트
#### 1.1.1. jquery와 chexkbox.js로드
~~~
<script src="jquery.1.12.min.js"></script>
<script src="checkbox.js"></script>
~~~
#### 1.1.2. 함수호출
~~~
$(function(){
	checkbox();
});
~~~
### 1.2. 마크업
~~~
<label for="a">
    <input type="checkbox" id="a" value="1"> 테스트1
</label>

<label for="b">
    <input type="checkbox" id="b" value="2"> 테스트2
</label>

<label for="c">
    <input type="checkbox" id="c" value="3"> 테스트3
</label>
~~~
### 1.3. CSS 스타일
데모에서의 기본스타일은 아래와 같으며 얼마든지 커스터마이징하여 사용할 수 있습니다.
~~~
label { background: gold; padding: 10px; margin: 0 5px; }
label.focus { outline: auto 5px -webkit-focus-ring-color; outline-offset: -2px; }
label.active { background: orange; }
input[type=checkbox] { position: absolute; z-index: -1; }
~~~
## 1. 데모

## 2. jsfiddle
https://jsfiddle.net/7rng4akc/
