import "./App.css";
import {useStore} from "./store/store.js";
import {observer} from "mobx-react-lite";
import {useEffect, useRef, useState} from "react";
import {TaskInfo} from "./components/TaskInfo/index.js";
import {Todo} from "./components/Todo/index.js";

const App = observer(() => {
    const {todo} = useStore();
    const [forceUpdare,setForceUpdate] = useState(false)
    const divHeight = useRef(null)
    const force = () =>{
        setForceUpdate(!forceUpdare)
    }
    useEffect(() => {
        todo.setHeight(divHeight.current.clientHeight)
    })
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
                    {todo.tasks.map((task) => {
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
