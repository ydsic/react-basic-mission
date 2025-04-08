import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";

export default function M1() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>리액트 프로젝트 버전 관리하기</h1>
      <h2 className={styles.subTitle}>
        Git을 사용하여 React 프로젝트의 초기 설정 및 버전 관리를 학습합니다. Git
        명령어를 사용하여 프로젝트를 초기 설정하고 커밋 히스토리 스크린샷을
        제출합니다.
      </h2>
      <img className={styles.img} src="/imgs/1.png" />
    </div>
  );
}
