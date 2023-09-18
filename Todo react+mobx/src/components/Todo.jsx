import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss"; 
import Buttons from "./Buttons";
import Childs from "./Childs";
import LeftSide from "./LeftSide";
const Todo = observer(({ task }) => {
  return (
    <div>
      <div className={classes.Task}>
      <LeftSide task={task}/>
        <Buttons task={task} />
      </div>
      <Childs task={task} />
      </div>
  );
});

export default Todo;
