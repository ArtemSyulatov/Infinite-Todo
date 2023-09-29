import React from "react";
import {observer} from "mobx-react-lite";
import classes from "../../Todo.module.scss";
import {TextField} from "@mui/material";

export const TaskInput = observer((task) => {
    return (
        <div>
            {task.task.inputToggle ? (
                <TextField
                    size='small'
                    fullWidth
                    label="Task description"
                    id="fullWidth"
                    onKeyDown={(e) => {
                        if (e.code == "Enter" && e.target.value !== "") {
                            task.task.toggleInput();
                        }
                    }}
                    type="text"
                    onChange={(e) => {
                        task.task.setText(e.target.value.slice(0,15));
                    }}
                    onBlur={(e) => {
                        if (e.target.value !== "") {
                            task.task.toggleInput();
                            e.target.style.backgroundColor = "white";
                        }
                    }}
                    onFocus={(e) => {
                        e.target.style.backgroundColor = "wheat";
                    }}
                    value={task.task.text}
                />
            ) : (
                <div
                    onClick={() => {
                        task.task.toggleInput();
                    }}
                    className={classes.taskText}
                >
                    {task.task.text}
                </div>
            )}
        </div>
    );
});

