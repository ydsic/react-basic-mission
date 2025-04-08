import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";

export default function M2() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>전개 연산자 이해하기</h1>
      <h2 className={styles.subTitle}>
        전개 연산자(...)를 사용하여 리스트 상태를 업데이트하는 방법을
        학습합니다. 전개 연산자를 사용하여 리스트 상태를 업데이트한 코드 파일을
        제출합니다.
      </h2>
      <img className={`${styles.img}`} src="/imgs/2.png" />
    </div>
  );
}
