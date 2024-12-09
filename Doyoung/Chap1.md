# SPA

SPA는 Single Page Application의 약자입니다. 이는 서버에서 전체 새로운 페이지를 로드하는 대신 현재 페이지를 동적으로 다시 작성하여 사용자와 상호 작용하는 웹 애플리케이션의 한 유형입니다. 이 접근 방식은 연속적인 페이지 간의 사용자 경험의 중단을 방지하여 애플리케이션이 데스크톱 애플리케이션처럼 작동하게 만듭니다.

## SPA의 장점

- **속도**: 필요한 콘텐츠만 업데이트되므로 SPA는 전통적인 다중 페이지 애플리케이션보다 훨씬 빠를 수 있습니다.
- **사용자 경험**: SPA는 더 원활하고 반응성이 뛰어난 사용자 경험을 제공합니다.
- **개발**: SPA는 개발이 더 쉬울 수 있습니다.

# 주요 자바스크립트 프레임워크

## React

React는 Meta에서 개발한 라이브러리로, 컴포넌트 기반 아키텍처를 사용하여 복잡한 사용자 인터페이스를 구축할 수 있습니다.

## Angular

Angular는 Google에서 개발한 프레임워크로, MVC 아키텍처를 사용하여 대규모 애플리케이션을 구축할 수 있습니다.

## Vue.js

Vue.js는 점진적으로 채택할 수 있는 프레임워크로, React와 Angular의 장점을 결합하여 사용하기 쉽고 유연합니다.

# 라이브러리와 프레임워크

## 라이브러리

라이브러리는 특정 기능을 수행하기 위해 사용자가 호출하는 코드의 집합입니다. 예를 들어, 문자열 처리, 머신러닝, 메일 발송 등의 기능을 제공하는 라이브러리가 있습니다.

### 예시

- 문자열 라이브러리
- 머신러닝 라이브러리
- 메일 발송 라이브러리

## 제어의 역전 (Inversion of Control)

제어의 역전은 프로그램의 흐름을 사용자가 아닌 프레임워크가 제어하는 디자인 패턴입니다. 이는 주로 프레임워크에서 사용되며, 사용자가 작성한 코드가 프레임워크에 의해 호출됩니다.

## 프레임워크

프레임워크는 애플리케이션의 구조를 정의하고, 사용자가 작성한 코드를 호출하여 특정 작업을 수행합니다. 프레임워크는 데이터 가공 연산, 시작 및 종료 처리, 도면 레이아웃 등을 관리합니다.

### 예시

- 데이터 가공 연산
- 시작 및 종료 시 처리
- 도면 레이아웃 관리

# React

## React의 특징

- **낮은 도입 장벽, 낮은 학습 비용**: React는 비교적 간단한 API와 문법을 가지고 있어 쉽게 배울 수 있습니다.
- **컴포넌트 지향적**: React는 컴포넌트 기반 아키텍처를 사용하여 재사용 가능한 UI 컴포넌트를 만들 수 있습니다.
- **앱의 단계적 성장에 대응**: React는 필요한 부분만 점진적으로 도입할 수 있어, 작은 프로젝트에서 대규모 애플리케이션으로 확장하기에 적합합니다.
- **다양한 문서와 라이브러리 제공**: React는 풍부한 공식 문서와 다양한 서드파티 라이브러리를 제공하여 개발을 지원합니다.

## 툴체인

툴체인은 개발 과정에서 사용되는 다양한 도구들의 집합을 의미합니다. 예를 들어, 다음과 같은 도구들이 포함됩니다.

### 예시

- **트랜스파일러**: Babel
- **번들러**: Webpack, Rollup, Parcel
- **미니피케이션 & 다이제스트 부여**: UglifyJS, Terser
- **개발서버 & HTTP 서버**: Webpack Dev Server, Live Server, Express

## 트랜스파일러

트랜스파일러는 한 프로그래밍 언어로 작성된 코드를 다른 언어로 변환하는 도구입니다. 예를 들어, Babel은 최신 JavaScript 코드를 구형 브라우저에서도 동작할 수 있도록 변환해줍니다.

## 번들러

번들러는 여러 개의 파일을 하나의 파일로 묶어주는 도구입니다. 예를 들어, Webpack은 여러 JavaScript 파일을 하나의 번들로 묶어줍니다.

## 미니피케이션 & 다이제스트 부여

미니피케이션은 코드의 크기를 줄이기 위해 불필요한 공백과 주석을 제거하는 과정입니다. 다이제스트 부여는 파일의 해시 값을 추가하여 캐싱 문제를 해결하는 방법입니다.

## 개발서버 & HTTP 서버

- 개발서버는 개발 중에 애플리케이션을 실행하고 테스트할 수 있는 서버입니다.
- HTTP 서버는 클라이언트 요청을 처리하고 응답을 반환하는 서버입니다.

## let과 var의 차이점

1. **블록 스코프 대응**: `let`은 블록 스코프를 가지며, `var`는 함수 스코프를 가집니다.
2. **동일한 변수 중복 선언 불가능**: `let`은 동일한 블록 내에서 동일한 변수를 중복 선언할 수 없지만, `var`는 가능합니다.

따라서, 예기치 않은 동작을 피하기 위해 `var` 대신 `let`을 사용하는 것이 좋습니다.

# const의 특성과 let과 const의 차이점

- `const`는 상수 선언을 위해 사용되며, 선언과 동시에 초기화가 필요합니다.
- `const`로 선언된 변수는 재할당이 불가능합니다.
- `let`은 재할당이 가능하지만, `const`는 불가능합니다.

# 템플릿 문자열

템플릿 문자열은 백틱(`` ` ``)을 사용하여 문자열을 작성하며, `${}`를 사용하여 변수나 표현식을 삽입할 수 있습니다.

```javascript
const name = "World";
console.log(`Hello, ${name}!`); // 출력: Hello, World!
```

# 옵셔널 체이닝 연산자

옵셔널 체이닝 연산자(`?.`)는 객체의 속성에 접근할 때, 해당 속성이 `null` 또는 `undefined`인 경우 에러를 발생시키지 않고 `undefined`를 반환합니다.

```javascript
const user = {};
console.log(user?.profile?.name); // undefined
```

# null 병합 연산자

null 병합 연산자(??)는 좌측 피연산자가 null 또는 undefined인 경우 우측 피연산자를 반환하고, 그렇지 않으면 좌측 피연산자를 반환합니다.

```javascript
const name = null ?? "default name";
console.log(name); // 'default name'
```

# 모듈화

- 모듈화는 코드를 여러 파일로 분리하여 관리하는 방법입니다. 예를 들어, math.js 파일에서 함수를 내보내고, 다른 파일에서 이를 가져올 수 있습니다.

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```javascript
// main.js
import { add, subtract } from "./math.js";

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
```

## 모듈의 기본 내보내기를 가져오기

모듈에서 기본 내보내기를 사용할 경우, default 키워드를 사용하여 내보내고, 가져올 때는 중괄호 없이 가져옵니다.

```javascript
// math.js
export default function multiply(a, b) {
  return a * b;
}
```

```javascript
// main.js
import multiply from "./math.js";

console.log(multiply(2, 3)); // 6
```