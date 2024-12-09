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

```jsx
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "다시 오셨군요!" : "회원가입을 해주세요."}</h1>;
}
```

- 논리 AND (&&) 연산자: 조건이 참일 때 컴포넌트를 렌더링합니다.

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>안녕하세요!</h1>
      {unreadMessages.length > 0 && (
        <h2>읽지 않은 메시지가 {unreadMessages.length}개 있습니다.</h2>
      )}
    </div>
  );
}
```

- 논리 OR (||) 연산자: 조건이 거짓일 때 대체 값을 제공합니다.

```jsx
function Display({ name }) {
  return <div>{name || "손님"}</div>;
}
```

### 렌더 프롭(Render Props)

- 렌더 프롭(Render Props)은 React 컴포넌트에서 재사용 가능한 로직을 공유하는 기술입니다. 렌더 프롭은 일반적으로 함수 형태의 prop을 사용하여 컴포넌트의 렌더링 로직을 외부에서 정의할 수 있게 합니다.

```jsx
import React from "react";

// 데이터 가져오기 로직을 포함한 컴포넌트
class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

// 렌더 프롭을 사용하는 컴포넌트
function App() {
  return (
    <DataFetcher
      url="https://api.example.com/data"
      render={(data) => (
        <div>
          {data ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    />
  );
}

export default App;
```

- 위 예시에서 DataFetcher 컴포넌트는 데이터를 가져오는 로직을 포함하고 있으며, render prop을 통해 데이터를 렌더링하는 방식을 외부에서 정의할 수 있습니다. App 컴포넌트는 DataFetcher를 사용하여 데이터를 가져오고, 데이터를 렌더링하는 방식을 정의합니다.

## 타입 체크를 위한 구조

- React 컴포넌트에서 타입 체크를 위해 사용할 수 있는 몇 가지 방법이 있습니다. 여기서는 TypeScript, Flow, PropTypes를 사용하는 방법을 설명합니다.

### TypeScript

- TypeScript는 정적 타입 검사 도구로, 컴파일 타임에 타입 오류를 잡아줍니다.

```jsx
import React from "react";

interface DataFetcherProps {
  url: string;
  render: (data: any) => JSX.Element;
}

interface DataFetcherState {
  data: any;
}

class DataFetcher extends React.Component<DataFetcherProps, DataFetcherState> {
  state: DataFetcherState = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

const App: React.FC = () => (
  <DataFetcher
    url="https://api.example.com/data"
    render={(data) => (
      <div>
        {data ? (
          <ul>
            {data.map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )}
  />
);

export default App;
```

### Flow

- Flow는 Facebook에서 개발한 정적 타입 검사 도구입니다.

```jsx
// @flow
import React from "react";

type DataFetcherProps = {
  url: string,
  render: (data: any) => React.Node,
};

type DataFetcherState = {
  data: any,
};

class DataFetcher extends React.Component<DataFetcherProps, DataFetcherState> {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

const App = () => (
  <DataFetcher
    url="https://api.example.com/data"
    render={(data) => (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )}
  />
);

export default App;
```

### PropTypes

- PropTypes는 런타임에 타입을 검사하는 도구입니다.

```jsx
import React from "react";
import PropTypes from "prop-types";

class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

DataFetcher.propTypes = {
  url: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const App = () => (
  <DataFetcher
    url="https://api.example.com/data"
    render={(data) => (
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )}
  />
);

export default App;
```

## State 값 업데이트를 위한 두 가지 구문

- React에서 state 값을 업데이트하는 두 가지 방법이 있습니다. 이 두 가지 방법은 state 업데이트가 비동기적으로 이루어지기 때문에 중요합니다.

#### 직접 값을 설정하는 방법

```
setCount(count + 1);
```

- 이 방법은 현재 state 값을 기반으로 새로운 값을 설정합니다. 그러나 state 업데이트가 비동기적으로 이루어지기 때문에, 이 구문을 연속으로 두 번 호출해도 state 값이 두 번 증가하지 않을 수 있습니다.

```
setCount(count + 1);
setCount(count + 1); // 예상한 대로 두 번 증가하지 않음
```

#### 함수형 업데이트 방법

```
setCount(c => c + 1);
```

- 이 방법은 함수형 업데이트를 사용하여 이전 state 값을 기반으로 새로운 값을 설정합니다. 이 방법을 사용하면 state 업데이트가 비동기적으로 이루어지더라도 정확한 결과를 얻을 수 있습니다.

```
setCount(c => c + 1);
setCount(c => c + 1); // 예상대로 두 번 증가함
```

#### 중요한 점

- 새로운 state 값이 반영되는 것은 이벤트 핸들러가 끝난 뒤에 이루어집니다. 따라서 state 값을 업데이트한 직후에 해당 값을 사용하려고 하면, 예상한 결과를 얻지 못할 수 있습니다.

## 고급 이벤트 처리

### React에서 사용할 수 있는 이벤트

- React는 이벤트를 표준화하여 다양한 브라우저에서 일관된 속성을 갖도록 합니다.

#### 마우스 이벤트

- onClick
- onDoubleClick
- onMouseEnter
- onMouseLeave

#### 키보드 이벤트

- onKeyDown
- onKeyPress
- onKeyUp

### 폼 이벤트

- onChange
- onSubmit
- onFocus
- onBlur

### 터치 이벤트 (모바일 기기용)

- onTouchStart
- onTouchMove
- onTouchEnd

### React에서의 이벤트 처리

- 이벤트 처리 문법: 이벤트 이름에 카멜 케이스를 사용하고 함수로 이벤트 핸들러를 전달합니다.

```jsx
<button onClick={handleClick}>클릭하세요</button>
```

- 기본 동작 방지

```jsx
function handleSubmit(event) {
  event.preventDefault();
  // 폼 제출 처리
}

<form onSubmit={handleSubmit}>{/* 폼 요소들 */}</form>;
```

#### 이벤트 핸들러에 인수 전달

- 화살표 함수를 사용하여

```jsx
<button onClick={() => handleClick(id)}>삭제</button>
```

- bind를 사용하여

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

### 이미지를 불러올 수 없는 경우 더미 이미지 표시하기

- 이미지를 불러올 수 없는 경우를 대비하여 더미 이미지를 표시하는 방법을 설명합니다. 이는 사용자 경험을 향상시키는 데 도움이 됩니다.

```jsx
import React from "react";

function ImageWithFallback({ src, alt, fallbackSrc }) {
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
}

export default function App() {
  return (
    <div>
      <h1>이미지 예시</h1>
      <ImageWithFallback
        src="https://example.com/nonexistent.jpg"
        alt="Example"
        fallbackSrc="https://via.placeholder.com/150"
      />
    </div>
  );
}
```

- 위 예시에서 ImageWithFallback 컴포넌트는 src prop으로 전달된 이미지를 로드하려고 시도합니다. 만약 이미지를 불러올 수 없으면 onError 이벤트 핸들러가 호출되어 fallbackSrc로 대체됩니다. App 컴포넌트는 이 컴포넌트를 사용하여 이미지를 표시합니다.

## 이벤트 전파 방지

- React에서 이벤트 전파를 방지하는 방법을 설명합니다. 이벤트 전파는 이벤트가 발생한 요소에서 시작하여 상위 요소로 전파되는 것을 의미합니다. 이를 방지하려면 event.stopPropagation() 메서드를 사용할 수 있습니다.

```jsx
import React from "react";

function ParentComponent() {
  const handleParentClick = () => {
    alert("Parent clicked");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", backgroundColor: "#f0f0f0" }}
    >
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  const handleChildClick = (event) => {
    event.stopPropagation();
    alert("Child clicked");
  };

  return (
    <button onClick={handleChildClick} style={{ padding: "10px" }}>
      Click me
    </button>
  );
}

export default ParentComponent;
```

- 위 예시에서 ChildComponent의 버튼을 클릭하면 handleChildClick 함수가 호출되고, event.stopPropagation() 메서드가 실행되어 이벤트가 상위 요소로 전파되지 않습니다. 따라서 ParentComponent의 handleParentClick 함수는 호출되지 않습니다.

### 이벤트 전파 단계

- 이벤트 전파는 세 가지 단계로 이루어집니다.
  1. 캡쳐링 단계 (Capturing Phase): 이벤트가 최상위 요소에서 시작하여 이벤트가 발생한 요소까지 내려오는 단계입니다.
  2. 타깃 단계 (Target Phase): 이벤트가 실제로 발생한 요소에서 이벤트가 처리되는 단계입니다.
  3. 버블링 단계 (Bubbling Phase): 이벤트가 발생한 요소에서 시작하여 최상위 요소까지 전파되는 단계입니다.

### onXXXXCapture

- React에서는 이벤트 핸들러를 캡쳐링 단계에서 실행할 수 있도록 onXXXXCapture 속성을 제공합니다. 예를 들어, onClickCapture는 클릭 이벤트가 캡쳐링 단계에서 처리되도록 합니다.

```jsx
import React from "react";

function GrandParentComponent() {
  const handleGrandParentClick = () => {
    alert("GrandParent clicked");
  };

  return (
    <div
      onClickCapture={handleGrandParentClick}
      style={{ padding: "30px", backgroundColor: "#e0e0e0" }}
    >
      <ParentComponent />
    </div>
  );
}

function ParentComponent() {
  const handleParentClick = () => {
    alert("Parent clicked");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", backgroundColor: "#f0f0f0" }}
    >
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  const handleChildClick = (event) => {
    event.stopPropagation();
    alert("Child clicked");
  };

  return (
    <button onClick={handleChildClick} style={{ padding: "10px" }}>
      Click me
    </button>
  );
}

export default GrandParentComponent;
```

- 위 예시에서 GrandParentComponent는 onClickCapture 이벤트 핸들러를 사용하여 캡쳐링 단계에서 이벤트를 처리합니다. ChildComponent의 버튼을 클릭하면 다음과 같은 순서로 이벤트가 전파됩니다:

  1. 캡쳐링 단계: GrandParentComponent의 handleGrandParentClick 함수가 호출됩니다.
  2. 타깃 단계: ChildComponent의 handleChildClick 함수가 호출됩니다.
  3. 버블링 단계: ParentComponent의 handleParentClick 함수는 호출되지 않습니다 (event.stopPropagation() 때문에).

- 이와 같이 이벤트 전파 단계와 onXXXXCapture 속성을 이해하면, React 애플리케이션에서 이벤트 처리를 보다 효과적으로 할 수 있습니다.

### 비 패시브(Non-Passive) 모드에서 이벤트 핸들러 설치하기

- 비 패시브 모드에서 이벤트 핸들러를 설치하면, 기본 동작을 방지할 수 있습니다. 예를 들어, 스크롤 이벤트를 막기 위해 비 패시브 모드에서 이벤트 핸들러를 설정할 수 있습니다

```jsx
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <h1>스크롤 막기 예시</h1>
      <p>이 페이지는 스크롤이 막혀 있습니다.</p>
    </div>
  );
}

export default App;
```

- 위 예시에서 handleScroll 함수는 스크롤 이벤트가 발생할 때 호출되며, event.preventDefault()를 사용하여 기본 스크롤 동작을 막습니다. addEventListener의 세 번째 인자로 { passive: false }를 전달하여 비 패시브 모드에서 이벤트 핸들러를 설정합니다.

#### 비 패시브 모드의 중요성

- 기본적으로 스크롤 이벤트는 패시브 모드에서 처리되므로, event.preventDefault()를 호출해도 기본 동작을 막을 수 없습니다. 비 패시브 모드에서 이벤트 핸들러를 설정하면, 기본 동작을 막을 수 있습니다. 이는 스크롤을 막거나 특정 동작을 방지할 때 유용합니다.
