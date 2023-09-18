import { observer } from "mobx-react-lite";
import React from "react";
const Todo = observer(({ task }) => {
  return (
    <div>
      <div className="Task">
        <div className="test">
          <div className="inputText">
            {task.inputToggle ? (
              <input
                onKeyDown={(e) => {
                  if ((e.code == "Enter")) {
                    task.toggleInput();
                  }
                }}
                type="text"
                onChange={(e) => {
                  task.setText(e.target.value);
                }}
                value={task.text}
              />
            ) : (
              <div
                onClick={() => {
                  task.toggleInput();
                }}
              >
                {task.text}
              </div>
            )}
          </div>

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
