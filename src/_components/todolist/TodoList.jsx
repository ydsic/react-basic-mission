import { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["React 공부하기", "어렵다..."]);
  const [showAlert, setShowAlert] = useState(false);

  function inputText() {
    setTodos((prev) => [...prev, input]);
    setInput("");
  }

  return (
    <>
      <div className="mx-[100px]">
        <h1 className="text-3xl font-bold mt-[50px] text-center">TodoList</h1>
        {todos.map((e) => (
          <li className="text-1xl font-bold mt-[20px] text-center">{e}</li>
        ))}
      </div>
      <div className="mx-[100px] flex flex-col mt-[20px]">
        <button
          onClick={() => setShowAlert(!showAlert)}
          className="border-1 my-[50px] p-[5px] bg-blue-300 hover:bg-blue-700"
        >
          TodoList 코드 보기
        </button>

        <input
          type="text"
          placeholder="Todo 입력"
          className="border-1 p-[10px] outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={inputText}
          className="border-1 mt-[10px] p-[10px] bg-yellow-300 hover:bg-yellow-700"
        >
          추가
        </button>
      </div>

      {showAlert && (
        <div className="position: absolute top-[10%] border-2 p-[20px] bg-opacity-0 flex flex-col">
          <img className="w-[650px]" src="/imgs/4.png" />
          <button
            className="border-1 mt-[10px] p-[10px] bg-yellow-300 hover:bg-yellow-700"
            onClick={() => setShowAlert(!showAlert)}
          >
            창 닫기
          </button>
        </div>
      )}
    </>
  );
}
