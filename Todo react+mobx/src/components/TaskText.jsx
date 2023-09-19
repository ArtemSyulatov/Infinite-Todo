import { observer } from "mobx-react-lite";
import React from "react";

const TaskText = observer((task) => {
  console.log(task);
  return (
    <div>
      <textarea>asd</textarea>
    </div>
  );
});

export default TaskText;
