import "./App.css";
import {useStore} from "./store/store.js";
import {observer} from "mobx-react-lite";
import Todo from "./components/Todo.jsx";
import TaskInfo from "./components/TaskInfo.jsx";
import {useState} from "react";

const App = observer(() => {
    const [itemsCount, setItemsCount] = useState(0)
    const increment = () => {
        setItemsCount(itemsCount + 1)
    }
    const decrement = () => {
        setItemsCount(itemsCount - 1)
    }
    const {todo} = useStore();
    return (
        <div className="App">
            <div className="main">
                <button
                    className="addTaskBtn"
                    onClick={() => {
                        todo.addTask(Math.floor(Math.random() * 100), '');
                        increment()
                    }}
                >
                    Add Task {itemsCount}
                </button>
                <div className="Tasks">
                    {todo.tasks.map((task) => {
                        return <Todo decrement={decrement} key={task.id} task={task}/>;
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
