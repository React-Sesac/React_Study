# React 기본 학습 정리

## 1-1. Props/State란?
- **Props**: 컴포넌트 간에 **데이터를 전달**하는 방법. 부모 컴포넌트가 자식 컴포넌트에 정보를 넘길 때 사용.
  - 비유: **부모가 아이에게 도시락을 준다.**
  - 데이터는 **읽기 전용**으로 변경할 수 없음.
- **State**: 컴포넌트 내에서 **기억하고 관리하는 데이터**.
  - 비유: **컴포넌트의 머릿속 메모장**.
  - 값이 바뀌면 화면이 다시 그려짐.

---

## 1-2. Props의 기본
- Props는 부모 컴포넌트에서 자식 컴포넌트로 값을 넘길 때 사용.
```javascript
function Greeting({ name }) {
  return <h1>안녕, {name}!</h1>;
}

function App() {
  return <Greeting name="철수" />;
}
```
- Props는 읽기만 가능하고, 변경하려면 부모 컴포넌트가 변경해야 함.

---

## 1-3. 이벤트 처리의 기본
- React에서 이벤트는 HTML과 비슷하지만 함수 이름은 **CamelCase**로 작성.
```javascript
function App() {
  function handleClick() {
    alert("버튼이 클릭됐어요!");
  }

  return <button onClick={handleClick}>클릭</button>;
}
```
- `handleClick()`처럼 괄호를 붙이면 즉시 실행되니 주의.

---

## 1-4. State의 기본
- **State**는 컴포넌트가 데이터를 기억하고 업데이트할 수 있게 해줌.
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>숫자 증가</button>
    </div>
  );
}
```
- State 값이 변경되면 화면이 자동으로 업데이트됨.

---

## 1-5. React Developer Tools 소개
- React Developer Tools는 브라우저 확장 프로그램으로, **React 컴포넌트 구조와 상태/Props를 확인**할 수 있음.
- 주요 기능:
  - **컴포넌트 트리 보기**: 컴포넌트 간 관계 확인.
  - **State/Props 확인**: 현재 값 확인 가능.
  - **디버깅 도구**: 문제 해결을 도와줌.

---

## 2-1. 배열 나열하기 - 반복 처리
- 배열 데이터를 화면에 표시하려면 `map()` 사용.
```javascript
function List() {
  const items = ["사과", "바나나", "체리"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

---

## 2-2. 식의 진위 여부에 따라 표시 전환 - 조건부 분기
- 데이터를 보여줄지 말지 결정하려면 `if`나 `삼항 연산자`를 사용.
```javascript
function Greeting({ isLoggedIn }) {
  return <p>{isLoggedIn ? "안녕하세요!" : "로그인하세요!"}</p>;
}
```

---

## 2-3. 보충: 스타일 선택적으로 적용하기
- 조건에 따라 스타일을 바꿀 때 `className`이나 `style` 속성을 사용.
```javascript
function Box({ isActive }) {
  return (
    <div style={{ backgroundColor: isActive ? "blue" : "gray" }}>
      {isActive ? "활성화됨" : "비활성화됨"}
    </div>
  );
}
```

---

## 3-1. 컴포넌트의 하위 콘텐츠를 템플릿에 반영하기
- 컴포넌트 내부에서 `{props.children}`을 사용하여 부모가 넣은 내용을 표시.
```javascript
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
```

---

## 3-2. 여러 children 넘겨주기
- 여러 내용을 `children`으로 넘기고 모두 표시 가능.
```javascript
function App() {
  return (
    <Wrapper>
      <h1>제목</h1>
      <p>본문 내용</p>
    </Wrapper>
  );
}
```

---

## 3-3. children에 대한 매개변수 전달하기
- `React.cloneElement`로 추가 데이터를 전달 가능.

---

## 3-4. 프로퍼티 타입 검증(PropTypes)
- PropTypes는 컴포넌트 Props의 **타입을 확인**하는 도구.
```javascript
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <p>안녕, {name}!</p>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

## 3-5. State 값 업데이트를 위한 두 가지 구문
1. **값 기반 업데이트**: `setState(새 값)`
2. **함수 기반 업데이트**: `setState((이전 값) => 새 값)`

---

## 3-6. 자식 컴포넌트에서 부모 컴포넌트로의 정보 전달
- 부모 컴포넌트가 함수를 Props로 넘기고 자식이 호출.
```javascript
function Parent() {
  const handleChildClick = (data) => {
    console.log("자식이 보낸 데이터:", data);
  };

  return <Child onClick={handleChildClick} />;
}

function Child({ onClick }) {
  return <button onClick={() => onClick("안녕!")}>클릭</button>;
}
```

---

## 4-1. 리액트에서 사용할 수 있는 이벤트
- 클릭 이벤트: `onClick`
- 키보드 이벤트: `onKeyPress`
- 마우스 이벤트: `onMouseOver`

---

## 4-2. 이벤트 객체
- 이벤트 핸들러 함수에서 자동으로 전달되는 객체.
```javascript
function App() {
  function handleClick(event) {
    console.log(event.target);
  }

  return <button onClick={handleClick}>클릭</button>;
}
```

---

## 4-3. 이벤트 전파 방지
- `event.stopPropagation()`으로 이벤트 전파를 막음.
```javascript
function App() {
  function handleClick(event) {
    event.stopPropagation();
  }

  return (
    <div onClick={() => console.log("부모 클릭")}>
      <button onClick={handleClick}>자식 클릭</button>
    </div>
  );
}
```

---

## 4-4. 이벤트 핸들러 옵션 설정하기
- 기본 동작 방지: `event.preventDefault()`
```javascript
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("폼이 제출됨");
  }

  return <form onSubmit={handleSubmit}><button type="submit">제출</button></form>;
}
```

