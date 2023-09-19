import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import RigthSide from "./RigthSide";
import Childs from "./Childs";
import LeftSide from "./LeftSide";

const Todo = observer(({ task }) => {
  return (
    <div className={classes.todo}>
      <div className={classes.zadachi}>
        <div className={classes.Task}>
          <LeftSide task={task} />
          <RigthSide task={task} />
        </div>
        <Childs task={task} />
      </div> 
    </div>
  );
});

export default Todo;
