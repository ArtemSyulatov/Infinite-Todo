import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import icon from "../assets/icon_sloy.svg";
import TaskInput from "./taskInput";
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
          <TaskInput task={task}/>
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
