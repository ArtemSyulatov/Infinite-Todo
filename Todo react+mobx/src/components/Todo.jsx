import {observer} from "mobx-react-lite";
import React, {createContext, useEffect} from "react";
import classes from "./Todo.module.scss";
import TaskRigthSide from "./TaskRigthSide.jsx";
import TodoChilds from "./TodoChilds.jsx";
import TaskLeftSide from "./TaskLeftSide.jsx";
import {ListItemText} from "@mui/material";

const Todo = observer(({task,force}) => {
    return (
        <ListItemText  className={classes.todo}>
            <div className={classes.tasks}>
                <div className={classes.Task}>
                    <TaskLeftSide force={force} task={task}/>
                    <TaskRigthSide force={force} task={task}/>
                </div>
                <TodoChilds task={task}/>
            </div>
        </ListItemText>
    );
});

export default Todo;
