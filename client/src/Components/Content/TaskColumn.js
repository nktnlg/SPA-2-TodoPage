import React, { useEffect, useState } from "react";
import "./Content.scss"
import Task from "./Task"

const TaskColumn = ({title, tasks})=>{
    
    const [color, setColor] = useState('');
    useEffect(()=>{
        if(title === "High Priority"){setColor("highPriorityColumn")}
        if(title === "Medium Priority"){setColor("mediumPriorityColumn")}
        if(title === "Low Priority"){setColor("lowPriorityColumn")}
    }, [])

    
    return (
    <div>
        <h2 id="urgent-high-title" className={color+" column-title "}>
              {title} 
        </h2>
        <div id="urgent-high-tasks">
            {tasks.map(t => <Task task={t} key={t.id}/>)}
        </div>
    </div>)}
export default TaskColumn