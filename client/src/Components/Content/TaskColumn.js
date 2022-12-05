import React from "react";
import "./Content.css"
import Task from "./Task"

const TaskColumn = ({title, tasks})=>{
    
    return (
    <div>
        <h2 id="urgent-high-title" className="column-title">
              {title} 
        </h2>
        <div id="urgent-high-tasks">
            {tasks.map(t => <Task task={t} key={t.id}/>)}
        </div>
    </div>)}
export default TaskColumn
