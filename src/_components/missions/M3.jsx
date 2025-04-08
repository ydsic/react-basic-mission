import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";

export default function M3() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>전개 연산자 이해하기</h1>
      <h2 className={styles.subTitle}>
        React에서 state를 생성하고 setState() 함수를 사용하는 방법을 학습합니다.
        state를 생성하고 setState() 함수를 사용한 코드 파일을 제출합니다.
      </h2>
      <img className={styles.img} src="/imgs/3.png" />
    </div>
  );
}
