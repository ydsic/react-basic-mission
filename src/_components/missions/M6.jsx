import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";

export default function M6() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>컴포넌트의 기본 구조 이해하기</h1>
      <h2 className={styles.subTitle}>
        기본적인 React 컴포넌트를 작성하여 React 컴포넌트 구조를 이해합니다.
        Header, Footer, Main 등의 기본적인 React 컴포넌트를 작성한 코드 파일과
        결과 스크린샷을 제출합니다.
      </h2>
      <img className={styles.img} src="/imgs/6.png" />
    </div>
  );
}
