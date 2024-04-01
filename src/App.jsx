import { useState, useRef } from "react";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import "./App.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime,
  },
  {
    id: 1,
    isDone: false,
    content: "엄준식 때리맥이기",
    date: new Date().getTime,
  },
  {
    id: 2,
    isDone: false,
    content: "박위정 응디 때리맥이기",
    date: new Date().getTime,
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="Container">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos = {todos} />
    </div>
  );
}

export default App;
