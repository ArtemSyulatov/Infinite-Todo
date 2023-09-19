import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import RigthSide from "./RigthSide";
import Childs from "./Childs";
import LeftSide from "./LeftSide";
import TaskText from "./TaskText";

const Todo = observer(({ task }) => {
  return (
    <div className={classes.todo}>
      <div>
        <div className={classes.Task}>
          <LeftSide task={task} />
          <RigthSide task={task} />
        </div>
        <Childs task={task} />
      </div>
      <div className={classes.TaskText}>
        <TaskText task={task} />
      </div>
    </div>
  );
});

export default Todo;
