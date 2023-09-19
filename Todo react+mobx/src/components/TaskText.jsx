import { observer } from "mobx-react-lite";
import React from "react"; 

const TaskText = observer((task) => {
  console.log(task);
  return (
    <div> 
      <p>Здесь будет тайтл задачи</p>
      <textarea></textarea>
    </div>
  );
});

export default TaskText;
