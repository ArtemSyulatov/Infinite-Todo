import React from "react";
import TaskInput from "./TaskInput.jsx";
import {observer} from "mobx-react-lite";
import icon from "../assets/icon_sloy.svg";
import classes from "./Todo.module.scss";

const TaskLeftSide = observer((task) => {
    return (
        <div className={classes.leftSide}>
            <img
                src={icon}
                onClick={() => {
                    task.task.openChilds();
                }}
                className={task.task.isChildsOpened ? null : classes.icon_active}
            />
            <TaskInput task={task.task}/>
        </div>
    );
});

export default TaskLeftSide;
