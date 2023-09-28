import {observer} from "mobx-react-lite";
import React, {createContext} from "react";
import classes from "./Todo.module.scss";
import TaskRigthSide from "./TaskRigthSide.jsx";
import TodoChilds from "./TodoChilds.jsx";
import TaskLeftSide from "./TaskLeftSide.jsx";

const Todo = observer(({task, decrement}) => {
    return (
        <div className={classes.todo}>
            <div className={classes.tasks}>
                <div className={classes.Task}>
                    <TaskLeftSide task={task}/>
                    <TaskRigthSide decrement={decrement} task={task}/>
                </div>
                <TodoChilds task={task}/>
            </div>
        </div>
    );
});

export default Todo;
