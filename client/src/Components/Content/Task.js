import React, { useContext } from "react";
import { FuncContext } from "./Content";
import "./Task.css"

const Task = ({task})=>{

    const functionality = useContext(FuncContext);
    return (
    
            <div className="task">
                <button className="task-cross" onClick={()=>{functionality.deleteTask(task.id)}}>
                    <svg className="task-cross-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" viewBox="0 0 16 16"> 
                        <path  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> 
                    </svg>
                </button>
                <div id="urgent-high-1" className="task-card" onClick={()=>{functionality.openTaskModal(task)}}>{task.taskName}</div>
            </div>)}

export default Task;