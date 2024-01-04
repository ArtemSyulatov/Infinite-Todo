import "./App.css";
import {useStore} from "./store/store";
import {observer} from "mobx-react-lite";
import {RefObject, useEffect, useRef, useState} from "react";
import {TaskInfo} from "./components/TaskInfo";
import {Todo} from "./components/Todo";
import {TaskState} from "./store/TaskState/TaskState";

const App = observer(() => {
    const {todo} = useStore();
    const [forceUpdare, setForceUpdate] = useState(false)
    const divHeight = useRef() as RefObject<HTMLDivElement>  ;
    const force = () => {
        setForceUpdate(!forceUpdare)
    }
    useEffect(() => {
        if (divHeight.current && divHeight.current.clientHeight){
            todo.setHeight(divHeight.current.clientHeight)
        }
    },)
    return (
        <div className="App">
            <div
                className={`main ${todo.taskHeight > 400 ? 'overFlowY' : ''}`}>
                <p>Todo React/Mobx</p>
                <button
                    className="addTaskBtn"
                    onClick={() => {
                        todo.addTask(Math.floor(Math.random() * 100), '');
                    }}
                >
                    Add Task
                </button>
                <div className="Tasks" ref={divHeight}>
                    {todo.tasks.map((task:TaskState) => {
                        return <Todo force={force} key={task.id} task={task}/>;
                    })}
                </div>
            </div>
            <div className="tasktext">
                <TaskInfo/>
            </div>
        </div>
    );
});

export default App;
