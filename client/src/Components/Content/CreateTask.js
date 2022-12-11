import React, { useState } from "react";
import "./Content.css"

const CreateTask = ({addNewTask})=>{

    const [isDisabled, setIsDisabled] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskUrgency, setTaskUrgency] = useState('Low');
    //24
    
    const taskSubmit = (e) => {

        setIsDisabled(true);
        if (taskName && taskUrgency){
            const newTask = {
                taskName,taskDescription,taskUrgency, id: Date.now()
            }
    
            addNewTask(newTask)
            setTaskName('')
            setTaskDescription('')
            setTaskUrgency('Low')
            document.getElementById('new-task-description').innerHTML = '';
        }
        
        setIsDisabled(false);
        e.preventDefault()
    };

    return (
    <form id="create-tasks-card-form" className="create-tasks-card-form" onSubmit={taskSubmit} >
        <h2 id="form-new-tite" className="form-new-title">Create New Task</h2>
        
        <div id="form-new-name" className="form-new-name" >
            <input id="new-task-name-input" className="new-task-name-input" name="new-task-name-input" type="text" placeholder="task name" disabled={isDisabled} value={taskName} onChange={(e)=>setTaskName(e.target.value)} maxLength={24}/>
            <label id="new-task-name-input-label" className="new-task-name-input-label" htmlFor="new-task-name-input">Task Name</label>
        </div>
        
        

        <div id="form-new-description" className="form-new-description">
            <textarea id="new-task-description" 
            name="new-task-description" 
            className="new-task-description" 
            type="textarea" 
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}/>

            <label id="new-task-description-label" className="new-task-description-label" htmlFor="new-task-description">Description</label>
        </div>

        <div id="form-new-urgency" className="form-new-urgency">
            <select id="new-task-urgency-select" className="new-task-urgency-select" name="new-task-urgency-select" disabled={isDisabled} value={taskUrgency} onChange={(e)=>setTaskUrgency(e.target.value)}>
                <option id="new-task-urgency-option-low" value="Low">Low Urgency</option>
                <option id="new-task-urgency-option-average" value="Average">Average Urgency</option>
                <option id="new-task-urgency-option-high" value="High">High Urgency</option>
            </select>
        </div>

        <button id="form-new-submit" type="submit" className="form-new-submit" disabled={isDisabled || !taskName } >Add Task</button>
        
    </form>)}
export default CreateTask
