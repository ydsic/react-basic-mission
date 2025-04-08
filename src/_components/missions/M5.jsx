import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";

export default function M5() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>React App 실행해보기</h1>
      <h2 className={styles.subTitle}>
        npm run start 명령어를 실행하여 React 애플리케이션을 실행하고, App.js
        파일에서 본인의 이름을 화면에 출력되도록 수정합니다. npm run start
        명령어 실행 결과 스크린샷을 제출합니다.
      </h2>
      <img className={styles.img} src="/imgs/5.png" />
      <img className={`${styles.img} w-[400px]`} src="/imgs/5-2.png" />
    </div>
  );
}
