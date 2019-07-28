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
위 방법은 인자가 없는 경우로 모든 체크박스에 적용이 됩니다.

인자로 클래스 이름을 넣어 특정 클래스를 가진 체크박스에만 적용시킬 수 있습니다.
~~~
$(function(){
	checkbox(".ex-checkbox");
});
~~~
### 1.2. 마크업
~~~
<label for="a">
    <input type="checkbox" id="a" value="1" class="ex-checkbox"> 테스트1
</label>

<label for="b">
    <input type="checkbox" id="b" value="2" class="ex-checkbox"> 테스트2
</label>

<label for="c">
    <input type="checkbox" id="c" value="3" class="ex-checkbox"> 테스트3
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
### 1.4. 예제
#### 1.4.1. 특정 클래스를 가진 체크박스에만 적용하고 싶은 경우
~~~
<label for="a">
    <input type="checkbox" id="a" value="1" class="클래스명"> 테스트1
</label>
<script>
$(function(){
	checkbox('.클래스명');
});
</script>
~~~

## 2. 웹접근성
## 3. 데모

## 4. jsfiddle
https://jsfiddle.net/7rng4akc/
