import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../store/store.js";

const TaskInfo = observer(() => {
  const { todo } = useStore(); 
  if(!todo.selectedTask){
    return null
  }
  return (
    <div>
      <p>{todo.selectedTask?.text}</p>
      <textarea value = {todo.selectedTask?.title} onChange={(e) => {
          todo.selectedTask.setTitle(e.target.value)
      }}></textarea>
    </div>
  );
});

export default TaskInfo;
