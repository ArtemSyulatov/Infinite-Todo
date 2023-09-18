import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import icon from "../assets/icon_sloy.svg";
const Todo = observer(({ task }) => {
  return (
    <>
      <div className={classes.Task}>
        <div className={classes.leftSide}>
          <img
            src={icon}
            onClick={() => {
              task.openChilds();
            }}
            className={task.isChildsOpened ? null : classes.icon_active}
          />
          <div>
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
                    e.target.style.backgroundColor = "white";
                  }
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#bcdbf7";
                }}
                value={task.text}
                placeholder="Task description"
              />
            ) : (
              <div
                onClick={() => {
                  task.toggleInput();
                }}
                className={classes.taskText}
              >
                {task.text}
              </div>
            )}
          </div>
        </div>
        <div className={classes.rightSide}>
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
        </div>
      </div>
      <div className={classes.Childs}>
        {task.isChildsOpened
          ? null
          : task.childs.map((element) => {
              return <Todo key={element.id} task={element} />;
            })}
      </div>
    </>
  );
});

export default Todo;
