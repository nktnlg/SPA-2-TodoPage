import React, { useEffect } from "react";
import "./Content.css"
import Task from "./Task"

const TaskColumn = ({title, tasks})=>{
    
    return (
    <div>
        <h2 id="urgent-high-title" className="column-title">
              {title} 
        </h2>
        <div id="urgent-high-tasks">
            {tasks.map(t => <Task task={t}/>)}
        </div>
    </div>)}
export default TaskColumn
