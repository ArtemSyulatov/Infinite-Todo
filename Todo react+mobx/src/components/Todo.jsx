import { observer } from "mobx-react-lite";
import React from "react";
const Todo = observer(({ task }) => {
  return (
    <div>
      <div className="Task">
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
            onClick={(e) => {
              e.stopPropagation();
              task.addChild({ text: task.text, title: "w31245" });
            }}
          >
            +
          </button>
          <button
            className="RemoveBtn"
            onClick={(event) => {
              event.stopPropagation();
              task.remove(task.id);
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
