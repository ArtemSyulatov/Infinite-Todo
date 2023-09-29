import {observer} from "mobx-react-lite";
import React, {createContext, useEffect} from "react";
import classes from "./Todo.module.scss";
import {ListItemText} from "@mui/material";
import {Icon} from "./Icon/index.js";
import {TodoChilds} from "./Childs/index.js";
import {Buttons} from "./Buttons/index.js";

export const Todo = observer(({task,force}) => {
    return (
        <ListItemText  className={classes.todo}>
            <div className={classes.tasks}>
                <div className={classes.Task}>
                    <Icon force={force} task={task}/>
                    <Buttons force={force} task={task}/>
                </div>
                <TodoChilds task={task}/>
            </div>
        </ListItemText>
    );
});

