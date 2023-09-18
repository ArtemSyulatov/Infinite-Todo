import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
const Todo = observer(({ task }) => {
  return (
    <div className={classes.Task}>
      <div className={classes.inputText}>
        {task.inputToggle ? (
          <input
            onKeyDown={(e) => {
              if (e.code == "Enter" && e.target.value !== "") {
                task.toggleInput();
              }
            }}
            type="text"
            onChange={(e) => {
              task.setText(e.target.value);
            }}
            onBlur={(e) => {
              if (e.target.value !== "") {
                task.toggleInput();
                e.target.style.backgroundColor = 'white'
              }
            }}
            onFocus={(e)=>{
              e.target.style.backgroundColor = '#bcdbf7'
            }}
            value={task.text}
            placeholder="Описание задачи"
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
          task.addChild({ text: "", title: "" });
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
  );
});

export default Todo;
