import { useState } from "react";
import "./App.css";
import { useStore } from "./store/store.js";
import { observer } from "mobx-react-lite";
import Todo from "./components/Todo.jsx";
const App = observer(() => {
  const { todo } = useStore();
  const [text, setText] = useState("");
  return (
    <div className="main">
      <textarea
        placeholder="write title of task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="addTaskBtn"
        onClick={() => {
          todo.addTask(Math.floor(Math.random() * 100), text);
          setText("");
        }}
      >
        Добавить задачу
      </button>
      <div className="Tasks">
        {todo.tasks.map((task) => {
          return <Todo key={task.id} task={task} text={text} />;
        })}
      </div>
    </div>
  );
});

export default App;
