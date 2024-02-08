import {observer} from "mobx-react-lite";
import classes from "./Todo.module.scss";
import {ListItemText} from "@mui/material";
import {Icon} from "./Icon";
import {TodoChilds} from "./Childs";
import {Buttons} from "./Buttons";
import {TaskState} from "../../store/TaskState/TaskState";


interface TodoProps {
    task: TaskState;
    force: () => void;
}

export const Todo = observer(({task, force}: TodoProps) => {
    return (
        <ListItemText className={classes.todo}>
            <div className={classes.tasks}>
                <div className={classes.Task}>
                    <Icon force={force} task={task}/>
                    <Buttons force={force} task={task}/>
                </div>
                <TodoChilds force={force} task={task}/>
            </div>
        </ListItemText>
    );
});

