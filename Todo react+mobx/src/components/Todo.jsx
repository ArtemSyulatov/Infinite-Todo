import { observer } from "mobx-react-lite";
import React, { createContext } from "react";
import classes from "./Todo.module.scss";
import RigthSide from "./RigthSide";
import Childs from "./Childs";
import LeftSide from "./LeftSide";

const Todo = observer(({ task ,setTitle}) => {
  console.log(setTitle)
  return (
    <div className={classes.todo}>
      <div className={classes.tasks}>
        <div className={classes.Task}>
          <LeftSide task={task} />
          <RigthSide task={task} setTitle={setTitle} />
        </div>
        <Childs task={task} />
      </div> 
    </div>
  );
});

export default Todo;
