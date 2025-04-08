import { useContext } from "react";
import { StyleList } from "../Layout";

export default function M1() {
  const styles = useContext(StyleList);
  return (
    <>
      <h1 className={styles.title}>리액트 프로젝트 버전 관리하기</h1>
      <p> </p>
    </>
  );
}
