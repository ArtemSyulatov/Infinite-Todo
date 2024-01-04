import {observer} from "mobx-react-lite";
import classes from "../../Todo.module.scss";
import {TextField} from "@mui/material";
import {TaskState} from "../../../../store/TaskState/TaskState";
import React from "react";

interface TaskInput{
    task:TaskState
}


export const TaskInput = observer(({task}:TaskInput) => {
    return (
        <div>
            {task.inputToggle ? (
                <TextField
                    size='small'
                    fullWidth
                    label="Task description"
                    id="fullWidth"
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                        if (e.code == "Enter") {
                            task.toggleInput();
                        }
                    }}
                    type="text"
                    onChange={(e) => {
                        task.setText(e.target.value.slice(0,15));
                    }}
                    onBlur={(e) => {
                        if (e.target.value !== "") {
                            task.toggleInput();
                            e.target.style.backgroundColor = "white";
                        }
                    }}
                    onFocus={(e) => {
                        e.target.style.backgroundColor = "wheat";
                    }}
                    value={task.text}
                />
            ) : (
                <div
                    onClick={() => {
                        task.toggleInput();
                    }}
                    className={classes.taskText}
                >
                    {task.text}
                </div>
            )}
        </div>
    );
});

