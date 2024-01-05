import "./App.css";
import {useStore} from "./store/store";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {TaskInfo} from "./components/TaskInfo";
import {Todo} from "./components/Todo";
import {TaskState} from "./store/TaskState/TaskState";

const App = observer(() => {
    const {todo} = useStore();
    const [forceUpdate, setForceUpdate] = useState(false)
    const force = () => {
        setForceUpdate(!forceUpdate)
    }
    return (
        <div className="App">
            <div
                className={`main`}>
                <div className={'containerBtn'}><p>Infinite TodoList</p>
                    <button
                        className="addTaskBtn"
                        onClick={() => {
                            todo.addTask(Math.floor(Math.random() * 100), '');
                        }}
                    >
                        Add Task
                    </button>
                </div>

                <div className="Tasks" >
                    {todo.tasks.map((task: TaskState) => {
                        return <Todo force={force} key={task.id} task={task}/>;
                    })}
                </div>
            </div>
            <div className="taskText">
                <TaskInfo/>
            </div>
        </div>
    );
});

export default App;
