import { observer } from "mobx-react-lite";
import React from "react";
import store from "../store/store";
const Todo = observer(({ task }) => {
  console.log(task);
  return (
    <div>
      <div
        className="Task"
        onClick={(e) => {
          e.stopPropagation();
          task.addChild({ text: "asdasd", title: "w31245" });
        }}
      >
        <div className="test">
          {task.text}
          <input
            type="checkbox"
            checked={task.isChecked}
            onChange={() => {
              task.setIsChecked();
            }}
          />
          <button
            className="RemoveBtn"
            onClick={(event) => {
              console.log(event);
              store.removeTask(task.id);
            }}
          >
            x
          </button>
          <div className="Childs">
            {task.childs.map((element) => {
              return <Todo key={element.id} task={element} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Todo;
