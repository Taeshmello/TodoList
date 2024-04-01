import { useState, useRef } from "react";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import "./App.css";

const mockData = [
  
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


  const onUpdate = (targetId) => {


    setTodos(todos.map((todo)=>todo.id === targetId ? {...todo, isDone: !todo.isDone}:todo))
  }
  const onDelete = (targetId) => {

  
    setTodos(todos.filter((todo)=> todo.id !== targetId))

  }
  return (
    <div className="Container">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos = {todos} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
