import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
const RigthSide = observer((task) => {
  return (
    <div className={classes.rightSide}>
      <input
        type="checkbox"
        checked={task.task.isChecked}
        onChange={() => {
          task.task.setIsChecked(); 
        }}
      />
      <button
        onClick={(event) => {
          event.stopPropagation();
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
      <button className="selectBtn" onClick={(e)=>{
        console.log('xui')
      }}>Select</button> {/*TODO Кнопка для выбора текста в текстарию*/}
    </div>
  );
});

export default RigthSide;
