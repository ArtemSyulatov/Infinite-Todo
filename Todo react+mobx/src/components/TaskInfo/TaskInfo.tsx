import {observer} from "mobx-react-lite";
import {useStore} from "../../store/store.ts";

export const TaskInfo = observer(() => {
    const {todo} = useStore();
    if (!todo.selectedTask) {
        return null
    }
    return (
        <div className={'TaskInfo'}>
            <h2 style={{marginBottom:'20px'}}>Selected Task</h2>
            <div className={'headerText'}><p style={{
                textDecoration: todo.selectedTask.isChecked ? 'line-through' : 'none',
                opacity: todo.selectedTask.isChecked ? '0.5' : '1'
            }}
            >{todo.selectedTask?.text}</p></div>
            <textarea className={'textArea'} style={{
                textDecoration: todo.selectedTask.isChecked ? 'line-through' : 'none',
                opacity: todo.selectedTask.isChecked ? '0.5' : '1'
            }} value={todo.selectedTask?.title} onChange={(e) => {
                todo.selectedTask.setTitle(e.target.value)
            }}
                      disabled={todo.selectedTask.isChecked}
            ></textarea>
        </div>
    );
});

