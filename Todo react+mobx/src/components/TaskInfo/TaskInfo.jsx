import {observer} from "mobx-react-lite";
import React from "react";
import {useStore} from "../../store/store.js";

export const TaskInfo = observer(() => {
    const {todo} = useStore();
    if (!todo.selectedTask) {
        return null
    }
    return (
        <div>
            <p style={{
                textDecoration: todo.selectedTask.isChecked ? 'line-through' : 'none',
                opacity: todo.selectedTask.isChecked ? '0.5' : '1'
            }}
            >{todo.selectedTask?.text}</p>
            <textarea style={{
                textDecoration: todo.selectedTask.isChecked ? 'line-through' : 'none',
                opacity: todo.selectedTask.isChecked ? '0.5' : '1'
            }} value={todo.selectedTask?.title} onChange={(e) => {
                todo.selectedTask.setTitle(e.target.value)
            }}
                      disabled={!!todo.selectedTask.isChecked}
            ></textarea>
        </div>
    );
});

