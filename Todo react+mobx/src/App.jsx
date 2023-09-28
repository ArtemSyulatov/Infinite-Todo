import "./App.css";
import {useStore} from "./store/store.js";
import {observer} from "mobx-react-lite";
import Todo from "./components/Todo.jsx";
import TaskInfo from "./components/TaskInfo.jsx";
import {useEffect, useRef} from "react";

const App = observer(() => {
    //TODO: при открытии дочерних тасков и при условии что они не влазят в див, скролл также должен появлятся
    const {todo} = useStore();
    const divHeight = useRef(null)
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
                        return <Todo key={task.id} task={task}/>;
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
