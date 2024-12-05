# 컴포넌트 개발 (기본)

## Props와 State

### Props 데이터 타입

React에서 props(프로퍼티)는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 데 사용됩니다. props는 다양한 데이터 타입을 가질 수 있습니다.

- 배열(Array): 아이템 목록을 전달할 때 유용합니다.

```jsx
const items = ["사과", "바나나", "체리"];
<ItemList items={items} />;
```

- 함수(Function): 콜백 함수나 이벤트 핸들러로 전달할 수 있습니다.

```jsx
const handleClick = () => {
  /* 클릭 처리 */
};
<Button onClick={handleClick} />;
```

- 객체(Object): 복잡한 데이터 구조를 전달할 때 사용합니다.

```jsx
const user = { name: "홍길동", age: 30 };
<UserProfile user={user} />;
```

기본 타입(Primitive Types): 문자열, 숫자, 불리언 등.

```jsx
<Greeting message="안녕하세요!" count={5} isLoggedIn={true} />
```

### Props 기본값 설정과 할당

- 기본값 설정: props가 제공되지 않을 경우 컴포넌트가 기본 동작을 하도록 기본값을 설정할 수 있습니다.

```jsx
function MyComponent({ name = "기본 이름" }) {
  return <div>{name}</div>;
}
```

또는 defaultProps를 사용하여:

```jsx
MyComponent.defaultProps = {
  name: "기본 이름",
};
```

- Props의 불변성: props는 읽기 전용이며 자식 컴포넌트 내에서 변경할 수 없습니다.

```jsx
function ChildComponent(props) {
  // 잘못된 예: props를 변경하지 마세요
  // props.name = '새 이름';

  // 올바른 예: props를 그대로 사용
  return <div>{props.name}</div>;
}
```

### React Developer Tools

React Developer Tools는 브라우저 확장 프로그램으로 React 애플리케이션을 검사하고 디버깅하는 데 도움을 줍니다.

- Components 탭: 컴포넌트 계층 구조를 검사하고, props와 state를 확인하며, 컴포넌트 간의 관계를 이해할 수 있습니다.

- Profiler 탭: 렌더링 시간을 추적하고 성능 병목 지점을 식별하여 애플리케이션의 성능을 측정합니다.

### React.Fragment와 단축 문법

- React.Fragment: DOM에 추가 노드를 생성하지 않고 여러 요소를 그룹화하는 데 사용됩니다.

```jsx
import React from "react";

function MyComponent() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}
```

- 단축 문법 (<>와 </>): React.Fragment의 축약형입니다.

```jsx
function MyComponent() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
```

### State의 기본

- useState 훅: 함수형 컴포넌트에서 상태를 사용할 수 있게 해줍니다.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>당신은 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
```

## 조건부 렌더링과 반복 처리

### 리스트에서의 Key 속성

- Key 속성: 리스트를 렌더링할 때 `key` prop을 사용하여 React가 어떤 아이템이 변경되었는지 식별할 수 있게 합니다.

```jsx
const items = ["사과", "바나나", "체리"];

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

- Key의 목적:
  - 요소를 추적하여 렌더링 최적화
  - 불필요한 재렌더링 방지
  - 참고: key는 자식 컴포넌트의 props를 통해 접근할 수 없습니다.

### 조건부 렌더링 표현 방법

- if 문: 표준 JavaScript의 if 문을 사용합니다.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>다시 오셨군요!</h1>;
  }
  return <h1>회원가입을 해주세요.</h1>;
}
```

- 즉시 실행 함수(IIFE): JSX 내에서 함수를 즉시 실행합니다.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <h1>다시 오셨군요!</h1>;
        }
        return <h1>회원가입을 해주세요.</h1>;
      })()}
    </div>
  );
}
```

- 삼항 연산자 (?:): 간결한 조건 표현식입니다.

jsx
코드 복사
function Greeting({ isLoggedIn }) {
return (

<h1>{isLoggedIn ? '다시 오셨군요!' : '회원가입을 해주세요.'}</h1>
);
}
논리 AND (&&) 연산자: 조건이 참일 때 컴포넌트를 렌더링합니다.

jsx
코드 복사
function Mailbox({ unreadMessages }) {
return (

<div>
<h1>안녕하세요!</h1>
{unreadMessages.length > 0 &&
<h2>읽지 않은 메시지가 {unreadMessages.length}개 있습니다.</h2>
}
</div>
);
}
논리 OR (||) 연산자: 조건이 거짓일 때 대체 값을 제공합니다.

jsx
코드 복사
function Display({ name }) {
return (

<div>
{name || '손님'}
</div>
);
}
고급 이벤트 처리
React에서 사용할 수 있는 이벤트
React는 이벤트를 표준화하여 다양한 브라우저에서 일관된 속성을 갖도록 합니다.

마우스 이벤트:

onClick
onDoubleClick
onMouseEnter
onMouseLeave
키보드 이벤트:

onKeyDown
onKeyPress
onKeyUp
폼 이벤트:

onChange
onSubmit
onFocus
onBlur
터치 이벤트 (모바일 기기용):

onTouchStart
onTouchMove
onTouchEnd
React에서의 이벤트 처리
이벤트 처리 문법: 이벤트 이름에 카멜 케이스를 사용하고 함수로 이벤트 핸들러를 전달합니다.

```jsx
<button onClick={handleClick}>클릭하세요</button>
```

- 기본 동작 방지:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  // 폼 제출 처리
}

<form onSubmit={handleSubmit}>{/* 폼 요소들 */}</form>;
```

이벤트 핸들러에 인수 전달:

- 화살표 함수를 사용하여:

```jsx
<button onClick={() => handleClick(id)}>삭제</button>
```

- bind를 사용하여:

```jsx
<button onClick={handleClick.bind(this, id)}>삭제</button>
```

### 이벤트 핸들러에서 this 바인딩

클래스 컴포넌트: 이벤트 핸들러를 클래스 인스턴스에 바인딩합니다.

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isOn: !state.isOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isOn ? "켜짐" : "꺼짐"}
      </button>
    );
  }
}
```

함수형 컴포넌트: useState 훅과 화살표 함수를 사용합니다.

```jsx
function Toggle() {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>;
}
```
