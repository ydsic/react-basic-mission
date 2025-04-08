import { useContext } from "react";
import { StyleList } from "@/contexts/StyleContext.js";
import TodoList from "../todolist/TodoList";

export default function M4() {
  const styles = useContext(StyleList);

  return (
    <div className={styles.divMaxSize}>
      <h1 className={styles.title}>TO-DO 애플리케이션 구현하기</h1>
      <h2 className={styles.subTitle}>
        map() 메소드를 사용하여 할 일 데이터를 나열하도록 TO-DO 애플리케이션을
        구현합니다. map() 메소드를 사용한 코드 파일과 애플리케이션 화면
        스크린샷을 제출합니다.
      </h2>
      <div className="flex justify-center mt-[50px] border-2 w-[80%] m-auto h-[400px]">
        <TodoList />
      </div>
    </div>
  );
}
