import { useState } from "react";
import "./App.css";
import { useStore } from "./store/store.js";
import { observer } from "mobx-react-lite";
import Todo from "./components/Todo.jsx";
import TaskText from "./components/TaskText.jsx";

const App = observer(() => {
  const { todo } = useStore();
  const [text, setText] = useState("");
  return (
    <div className="main"> 
      <button
        className="addTaskBtn"
        onClick={() => {
          todo.addTask(Math.floor(Math.random() * 100), text);
          setText("");
        }}
      >
        Add Task
      </button>
      <div className="Tasks">
        {todo.tasks.map((task) => {
          return <Todo key={task.id} task={task} text={text} />;
        })}
      </div>
      <div className='tasktext'>
        <TaskText task />
      </div>
    </div>
  );
});

export default App;
