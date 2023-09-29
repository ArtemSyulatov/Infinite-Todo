import React from "react";
import {observer} from "mobx-react-lite";
import icon from "../../../assets/icon_sloy.svg";
import classes from "../Todo.module.scss";
import {TaskInput} from "./TaskInput/index.js";

export const Icon = observer((task) => {
    return (
        <div className={classes.leftSide}>
            <img
                src={icon}
                onClick={() => {
                    task.task.openChilds();
                    task.force()
                }}
                className={task.task.isChildsOpened ? null : classes.icon_active}
            />
            <TaskInput task={task.task}/>
        </div>
    );
});

