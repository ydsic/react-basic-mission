import { StyleList } from "../contexts/StyleContext.js";
import M1 from "./missions/M1";
import M2 from "./missions/M2";
import M3 from "./missions/M3";
import M4 from "./missions/M4";
import M5 from "./missions/M5";
import M6 from "./missions/M6";

export default function Layout() {
  // Tailwind로 스타일 선언을 하면서 동시에 코드 재사용을 위해 변수 선언
  const missions = [M1, M2, M3, M4, M5, M6];
  const cardListAnimation = `sticky top-0 min-h-screen flex justify-center overflow-y-auto`;
  const bgColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];

  // 각 Mission마다 내부에 공통 Style을 주기 위해 변수 선언
  const styles = {
    title: "text-3xl font-bold m-[25px] text-center",
    subTitle: "text-2xl font-bold text-center",
    img: "my-[20px] m-auto",
    divMaxSize: "w-[70%}",
  };

  return (
    <div className="relative">
      <StyleList.Provider value={styles}>
        {missions.map((Mission, index) => (
          <div
            key={index}
            className={`${cardListAnimation} ${bgColors[index]}`}
          >
            <Mission />
          </div>
        ))}
      </StyleList.Provider>
    </div>
  );
}
