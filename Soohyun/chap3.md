컴포넌트

- 페이지를 구성하는 UI 구성요소
- 각각의 기능을 컴포넌트로 잘라내고 조합하여 앱(페이지)를 구성하는 것이 리액트의 기본

### Props/State

- props: 컴포넌트가 매개변수를 전달하기 위한 인수 props에서 외부로부터 값을 받고임시 인수
- state: 컴포넌트 내의 상태를 나타내는 변수시시각각 변하는 상태를 state에서 관리로컬 변수

### Props 기본

```jsx
export default function MyHello(props) {
  return <div>안녕하세요, {props.myName}님!</div>;
}
```

함수에 수신 인수 ‘Props’ 제공

```jsx
import MyHello from './MyHello';
...
root.render(
	<MyHello myName="홍길동"/>
);
```

컴포넌트가 ‘Props’를 수신(받음)

MyHello 는 컴포넌트를 호출하는 코드

이름 = 값, myName = “홍길동”

Props의 이름은 camelCase로.

### Props 데이터 유형

```jsx
<MyHello myName={13}> // 숫자
<MyHello myName={['','','',]}> // 배열
<MyHello myName={()=>{console.log("");}}> // 함수
<MyHello myName={{name: '홍길동', age:48}}> // 객체
```

자바스크립트 표현식으로 표현할 수 있는 타입 가능

### Props 분할 대입

```jsx
export default function MyHello({ myName }) {
  return <div>안녕하세요, {myName}님!</div>;
}
```

### 이벤트

- 사용자의 조작버튼 클릭, 입력 값 변경, 마우스 이동 등의 사용자 조작페이지/이미지 로드, 데이터 불러오기 완료 등 브라우저의 처리에 따른 특정 시점

⇒ 리액트는 이러한 이벤트의 타이밍에 맞춰 처리르 시랭하고 State를 변경(전부는 아님)

이벤트 핸들러

이벤트에 의해 호출되는 코드(함수)

```jsx
<button onClick={current}>현재 시각 가져오기</button>
```

onClick(JSX), onclick(JS), click 이벤트의 타이밍에 current 함수 호출

### State

State 값을 초기화하는 것은 useState 함수의 역할

```jsx
const [state, setState] = useState(initialState);
```

- state: State 값을 저장하는 변수
- setState: State 값을 업데이트하는 함수
- initialState: State의 초깃값

Props는 호출자로부터 값을 받는 창구.

컴포넌트 내부에서 Props 값을 변경해서는 안됨.

⇒ 호출자가 임의의 시점에 변경될 수 있기 때문

### 컴포넌트 리렌더링 타이밍 - Props/State

State가 업데이트 되는 시점에 즉시 화면에 반응(state: count, button click: update)

페이지가 다시 로드된 것이 아닌, 컴포넌트가 자동으로 다시 렌더링

어떤 변화가 감지되면 컴포넌트를 재실행하고, 그 결과를 다시 렌더링하는 작업 수행.

**리렌더링 발생 타이밍**

- State가 업데이트된 경우
- 전달받은 Props가 변경된 경우
- 부모 컴포넌트가 다시 렌더링된 경우

React Developer Tools

- Props/State의 값 실시간 표시 https://bit.ly/rdt-chrome
- [Components] 컴포넌트 구성 표시 = 컴포넌트 트리 + 개별 컴포넌트 정보 목록
- [Profiler] 페이지(컴포넌트)의 렌더링 속도 측정

### 조건부 분기

JSX 식에서 조건부 분기

- if 문

  ```jsx
  if(){
  	dd = <>
  } else {
  	dd = <>
  }

  ----
  {dd}
  ```

  구문이지 식이 아니기 때문에 JSX 식에 직접 삽입할 수는 없다

- 즉시함수
  ```jsx
  {
    (() => {})();
  }
  ```
- ?:, &&, || 연산자
  ```jsx
  {
    book.download ? <Download isbn={book.isbn} /> : null;
  }
  ```

### 타입체크

- TypeScript
- Flow
- PropTypes

### State 값 업데이트를 위한 두 가지 구문

state를 비동기적으로 업데이트

```jsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  // State에 아직 새로운 값이 반영이 안되서 둘 다 참조하는 값(count)은 같음.
};
```

⇒ 2씩 업데이트될 것 같지만, 1씩 업데이트 됨

State에 새로운 값이 반영되는 것은 이벤트 핸들러가 끝난 후.

State 값이 다시 그려지기 전까지는 State 값이 변경되지 않는다.

```jsx
const handleClick = () => {
  setCount((c) => c + 1);
  setCount((c) => c + 1);
};
```

### 자식 → 부모 컴포넌트로 정보 전달 : State

- 자식 컴포넌트에서 부모 컴포넌트의 State를 업데이트하여 정보 전달 (부모 → 자식 컴포넌트로 정보 전달 : Props)

⇒ 부모 컴포넌트에서 자신의 State를 업데이트하기 위한 update함수를 자식 컴포넌트에 전달

### 리액트에서 사용할 수 있는 이벤트

애니메이션, 클립보드, 구성, 드래그 앤드 드롭,

포커스, 키보드, 마우스, 기타(스크롤, 휠, …)

### 이벤트 객체

- 이벤트와 관련된 정보를 관리하기 위한 객체
- 이벤트 핸들러에서 이벤트 객체를 참조하려면, 핸들러의 첫 번째 인수에 ‘e’, ‘ev’
- 브라우저 간 사양 차이를 흡수한 합성 이벤트(SyntheticEvent)

### 이벤트 핸들러에 임의의 인수를 전달

```jsx
const current = (e, type) => {};

return <button onClick={(e) => current(e, "datetime")}>현재 날짜 및 시각</button>;
```

onEvent 속성에 전달하는 것은 (함수 호출이 아닌) 함수 자체!!

### 이벤트 전파 방지

이벤트가 발생하면 해당 처리가 호출된다

⇒ 이벤트가 원하는 요소에 도달 과정

1. 캡쳐링 단계: 최상위 window 객체에서 문서 트리를 따라 하위 요소로 이벤트가 전파
2. 타깃 단계: 이벤트의 발생원(요소)를 식별
3. 버블링 단계: 이벤트가 발생원(요소)에서 상위 요소로 전파되는 단계. 최상위 window 객체에 도달하면 이벤트 전파 종료

이벤트 처리는 이벤트 발생원에서만 실행되는 것은 아니다

⇒ 전파 과정에서 해당 핸들러가 존재할 경우, 해당 핸들러도 순서대로 실행된다.

캡쳐 단계에서 이벤트 처리도 가능(처리 순서 변경하기)

**이벤트 기본 동작 취소하기**

이벤트 기본동작은이벤트에 따라 브라우저에서 발생하는 동작

이벤트 핸들러를 처리한 후, 이벤트 기본 동작 발생 ⇒ 취소 ??? e.preventDefault();

(이 메서드로 취소할 수 없는 이벤트도 있음, 이벤트 객체의 cancelable 프로퍼티 참고)
