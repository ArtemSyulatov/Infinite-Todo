import {observer} from "mobx-react-lite";
import React from "react";
import classes from "./Todo.module.scss";
import {useStore} from "../store/store.js";
import {Button, ToggleButton} from "@mui/material";
import {
    AiFillDelete, AiOutlineCheckCircle,
    AiOutlinePlus,
    AiOutlineSelect
} from "react-icons/ai";

const TaskRigthSide = observer((props) => {
    const {todo} = useStore();
    return (
        <div className={classes.rightSide}>
            <ToggleButton
                value="check"
                selected={props.task.isChecked}
                onChange={() => {
                    props.task.setIsChecked();
                }}>
                <AiOutlineCheckCircle/>
            </ToggleButton>
            <Button
                onClick={(event) => {
                    event.stopPropagation();
                    props.task.addChild({text: "", title: ""});
                    props.force()
                }}
            >
                <AiOutlinePlus/>
            </Button>
            <Button
                onClick={(event) => {
                    event.stopPropagation();
                    props.task.remove(props.id);
                }}
            >
                <AiFillDelete/>
            </Button>
            <Button className="selectBtn" onClick={() => {
                todo.setSelectedTask(props.task)
            }}><AiOutlineSelect/>
            </Button>
        </div>
    );
});

export default TaskRigthSide;
