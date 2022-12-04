import React, { useState } from "react";
import "./Content.css"

const CreateTask = ({addNewTask})=>{

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskUrgency, setTaskUrgency] = useState('Low')
    
    
    const taskSubmit = (e) => {
        const newTask = {
            taskName,taskDescription,taskUrgency
        }
        console.log(newTask)
        addNewTask(newTask)
        e.preventDefault()
    };

    return (
    <form id="create-tasks-card-form" className="create-tasks-card-form" onSubmit={taskSubmit}>
        <h2 id="form-new-tite" className="form-new-title">Create New Task</h2>

        <div id="form-new-name" className="form-new-name">
            <input id="new-task-name-input" className="new-task-name-input" name="new-task-name-input" type="text" placeholder="task name" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
            <label id="new-task-name-input-label" className="new-task-name-input-label" htmlFor="new-task-name-input">Task Name</label>
        </div>

        <div id="form-new-description" className="form-new-description">
            <div id="new-task-description" name="new-task-description" className="new-task-description" type="text" contentEditable="true" onInput={(e)=>setTaskDescription(e.currentTarget.textContent)}></div>
            <label id="new-task-description-label" className="new-task-description-label" htmlFor="new-task-description">Description</label>
        </div>

        <div id="form-new-urgency" className="form-new-urgency">
            <select id="new-task-urgency-select" className="new-task-urgency-select" name="new-task-urgency-select" defaultValue="low" onChange={(e)=>setTaskUrgency(e.target.value)}>
                <option id="new-task-urgency-option-low" value="Low">Low Urgency</option>
                <option id="new-task-urgency-option-average" value="Average">Average Urgency</option>
                <option id="new-task-urgency-option-high" value="High">High Urgency</option>
            </select>
        </div>

        <button id="form-new-submit" type="submit" className="form-new-submit">Add Task</button>
    </form>)}
export default CreateTask
