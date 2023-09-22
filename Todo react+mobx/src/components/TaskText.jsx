import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react"; 

const TaskText = observer((props) => {
  return (
    <div> 
        <p>{props.title}</p>
      <textarea onChange={(e)=>{
          
      }}></textarea>
    </div>
  );
});

export default TaskText;
