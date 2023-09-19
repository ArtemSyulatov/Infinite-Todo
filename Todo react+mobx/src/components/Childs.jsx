import React from "react";
import { observer } from "mobx-react-lite";
import classes from "./Todo.module.scss";
import Todo from "./Todo";
const Childs = observer((task) => {
  return (
    <div className={classes.Childs}>
      {task.task.isChildsOpened
        ? null
        : task.task.childs.map((element) => {
            return <Todo key={element.id} task={element} />;
          })}
    </div>
  );
});

export default Childs;
