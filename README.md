# 리액트 기초

### 리액트 기초 배우기

## 리액트 설치

npx create-react-app 프로젝트명

## 리액트 실행

npm run start

## 리액트 포트 변경

PORT=3001 npm run start

## 리액트 스타일

=>jsx문법에서 class는 className을 사용해야됨
=>태그 내부에서도 사용할수 있지만 외부로 사용가능
단 반드시 스타일을 사용하는 컴포넌트에 import시킬것
=>import "./styles/styles.css"

## styled-components

=>태그 이름을 지정하지 않아도 되는 장점이 있음
=>프롭스로 값을 전달 받을수 있음
=>npm install --save styled-components
=>npm i styled-component
=> --save옵션은 패키지 제이슨에 dependency항목에 추가하는건데 생략 가능함
=>기본 스타일은 css와 비슷

## vscode-styled-components 확장자

=>다운 받은후, style지정할때 styled라고만 적어야한다

## npm i styled-reset

=>리셋 스타일 적용
