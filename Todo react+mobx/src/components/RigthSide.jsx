import { observer } from 'mobx-react-lite';
import React from 'react';
import classes from "./Todo.module.scss";
const RigthSide = observer((task) => {
    return (
        <div className={classes.rightSide}>
            <input
            type="checkbox"
            checked={task.task.isChecked}
            onChange={() => {
              task.setIsChecked();
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              task.task.addChild({ text: "", title: "" });
            }}
          >
            +
          </button>
          <button
            className="RemoveBtn"
            onClick={(event) => {
              event.stopPropagation();
              task.task.remove(task.id);
            }}
          >
            x
          </button>
        </div>
    );
});

export default RigthSide;