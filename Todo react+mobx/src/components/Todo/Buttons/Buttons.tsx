import {observer} from "mobx-react-lite";
import classes from "../Todo.module.scss";
import {useStore} from "../../../store/store.ts";
import {Button, ToggleButton} from "@mui/material";
import {
    AiFillDelete, AiOutlineCheckCircle,
    AiOutlinePlus,
    AiOutlineSelect
} from "react-icons/ai";
import {TaskState} from "../../../store/TaskState/TaskState";

interface ButtonsProps {
    task?: TaskState
    force: () => void
}

export const Buttons = observer(({task,force}:ButtonsProps) => {
    const {todo} = useStore();
    return (
        <div className={classes.rightSide}>
            <ToggleButton
                value="check"
                selected={task!.isChecked}
                onChange={() => {
                    task?.setIsChecked();
                }}>
                <AiOutlineCheckCircle/>
            </ToggleButton>
            <Button
                onClick={(event) => {
                    event.stopPropagation();
                    task?.addChild({text: "", title: ""});
                    force()
                }}
            >
                <AiOutlinePlus/>
            </Button>
            <Button
                onClick={(event) => {
                    event.stopPropagation();
                    task?.remove();
                    todo.setSelectedTask(null)
                }}
            >
                <AiFillDelete/>
            </Button>
            <Button className="selectBtn" onClick={() => {
                todo.setSelectedTask(task)
            }}><AiOutlineSelect/>
            </Button>
        </div>
    );
});

