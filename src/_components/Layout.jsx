import { createContext } from "react";
import M1 from "./missions/M1";
import M2 from "./missions/M2";
import M3 from "./missions/M3";
import M4 from "./missions/M4";
import M5 from "./missions/M5";
import M6 from "./missions/M6";

export const StyleList = createContext();

export default function Layout() {
  const missions = [M1, M2, M3, M4, M5, M6];
  const cardListAnimation = `sticky top-0 h-screen flex justify-center item-center`;
  const bgColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];
  const styles = {
    title: "text-3xl font-bold m-[15px]",
    p: "",
  };

  return (
    <div>
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
