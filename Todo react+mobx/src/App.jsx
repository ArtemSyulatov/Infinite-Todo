import { useState } from "react";
import "./App.css";
import store from "./store.js";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const [text, setText] = useState("");
  let { task, addTask, addChilds, removeTask } = store;
  let arrayOfTasks = toJS(task);
  console.log(arrayOfTasks);
  return (
    <div>
      <textarea
        placeholder="write title of task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(Math.floor(Math.random() * 1000), text);
          setText("");
        }}
      >
        Добавить задачу
      </button>
      <div>
        {arrayOfTasks.map((e, index) => {
          return (
            <div key={index}>
              {e.text}
              <button
                onClick={() => {
                  removeTask(e.id);
                  console.log(e);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default App;
