import { createContext } from "react";

// useContext를 함수 밖에 선언하는 이유
// Layout.jsx가 리렌더링 될 때마다 새로운 Context 인스턴스가 생성되는 것을 막기 위함
// 그래서 컴포넌트 밖에 export로 선언하는데
// 나는 조금 더 실무(?)스타일을 연습하기 위해 따로 context/StyleContext.js 로 구분
export const StyleList = createContext();
