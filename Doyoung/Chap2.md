# React의 기본

## 메인 페이지 준비 - index.html

React 애플리케이션의 메인 페이지는 일반적으로 `index.html` 파일입니다. 이 파일에는 `<script>` 요소가 포함되지 않습니다. 대신, 모든 스크립트는 번들링된 JavaScript 파일에 포함되어 있습니다.

## 앱 실행을 위한 진입점 - index.js

`index.js` 파일은 React 애플리케이션의 진입점입니다. 여기서 React 관련 라이브러리를 가져오고, 앱별 코드를 가져오며, 성능 모니터링을 위한 서비스를 가져옵니다. 또한, React 앱(App 컴포넌트)을 렌더링합니다.

## createRoot 메서드

React의 `createRoot` 메서드는 React 컴포넌트를 DOM에 렌더링하는 데 사용됩니다. React의 세계에서는 컴포넌트도 태그 형태로 호출됩니다.

## 보충: Strict 모드

React의 Strict 모드는 애플리케이션 내의 잠재적인 문제를 식별하는 데 도움을 줍니다. 개발 모드에서만 활성화되며, 추가적인 검사와 경고를 제공합니다.

## 보충: 앱 리렌더링

React는 상태(state)나 속성(props)이 변경될 때마다 컴포넌트를 리렌더링합니다. 이를 통해 UI가 항상 최신 상태를 유지합니다.

## 가상 DOM

React는 가상 DOM을 사용하여 실제 DOM 조작을 최소화합니다. 가상 DOM은 메모리 내에서 가벼운 DOM 트리 구조를 유지하며, 변경 사항을 실제 DOM에 효율적으로 반영합니다.

## 함수 컴포넌트와 클래스 컴포넌트

React에서는 함수 컴포넌트와 클래스 컴포넌트를 사용할 수 있습니다. 함수 컴포넌트는 더 간결하고 이해하기 쉬우며, 클래스 컴포넌트는 상태와 생명주기 메서드를 사용할 수 있습니다. 하지만 Hook이 도입되면서 함수 컴포넌트에 대한 대부분의 제약이 해소되었습니다. 따라서 함수 컴포넌트를 사용하는 것이 더 권장됩니다.

> 공식문서 참조.<br>
> 'Class는 사람과 기계를 혼란스럽게 합니다'

## JSX에 자바스크립트 표현식 삽입하기 - {...} 구문

JSX에서는 중괄호 `{...}` 구문을 사용하여 자바스크립트 표현식을 삽입할 수 있습니다. 이 구문 내의 표현식은 이스케이프 처리되어 JSX 코드에 안전하게 포함됩니다.

```jsx
const name = "React";
const element = <h1>Hello, {name}!</h1>;
// 결과: <h1>Hello, React!</h1>
```

## {...} 구문으로 속성 값 설정하기

JSX에서 속성 값은 중괄호 `{...}` 구문을 사용하여 자바스크립트 표현식으로 설정할 수 있습니다. 예를 들어, `<div className={className}>`와 같이 사용할 수 있습니다.

```jsx
const className = "container";
const element = <div className={className}>Hello, world!</div>;
// 결과: <div className="container">Hello, world!</div>
```

## Style 시트 설정하기

JSX에서 스타일을 설정할 때는 객체 형태로 스타일을 지정할 수 있습니다. 예를 들어, `<div style={{ color: 'red', fontSize: '12px' }}>Hello</div>`와 같이 사용할 수 있습니다.

> {...} 구문에서 식의 값은 일반적으로 문자열로 전달되지만, `style` 속성은 예외로 객체 형태로 전달해야 합니다.

```jsx
const style = { color: "red", fontSize: "12px" };
const styledElement = <div style={style}>Styled text</div>;
// 결과: <div style="color: red; font-size: 12px;">Styled text</div>
```

# JSX 식의 실체 이해하기

JSX는 JavaScript의 확장 문법으로, React 요소를 작성하는 데 사용됩니다. JSX는 `React.createElement` 메서드 호출로 변환됩니다.

## createElement 메서드

`createElement` 메서드는 JSX를 JavaScript 객체로 변환합니다. 이 객체는 React 요소를 나타내며, React는 이를 사용하여 가상 DOM을 업데이트합니다.

## JSX > createElement 변환

JSX는 컴파일 시 `React.createElement` 호출로 변환됩니다. 예를 들어, `<div>Hello, world!</div>`는 `React.createElement('div', null, 'Hello, world!')`로 변환됩니다. 여기서 `null`은 해당 요소에 전달할 속성(props)이 없음을 의미합니다.
