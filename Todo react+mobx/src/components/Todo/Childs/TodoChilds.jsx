import React from "react";
import {observer} from "mobx-react-lite";
import classes from "../Todo.module.scss";
import {Todo} from "../Todo.jsx";

export const TodoChilds = observer((task) => {
    return (<div className={classes.Childs}>
        {task.task.isChildsOpened ? task.task.childs.map((element) => {
            return <Todo key={element.id} task={element}/>;
        }) : null}
    </div>);
});

