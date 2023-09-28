import {observer} from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import {useStore} from "../store/store.js";

const TaskRigthSide = observer((props) => {
    const {todo} = useStore();
    return (
        <div className={classes.rightSide}>
            <input
                type="checkbox"
                checked={props.task.isChecked}
                onChange={() => {
                    props.task.setIsChecked();
                }}
            />
            <button
                onClick={(event) => {
                    event.stopPropagation();
                    props.task.addChild({text: "", title: ""});
                }}
            >
                +
            </button>
            <button
                className="RemoveBtn"
                onClick={(event) => {
                    event.stopPropagation();
                    props.task.remove(props.id);
                }}
            >
                x
            </button>
            <button className="selectBtn" onClick={() => {
                todo.setSelectedTask(props.task)
            }}>Select
            </button>
        </div>
    );
});

export default TaskRigthSide;
