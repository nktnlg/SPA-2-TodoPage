import React, {useEffect, useState} from "react";
import "./Task.css"
const Modal = props => {
    const [taskName, setTaskName] = useState(props.modal.taskName);
    const [taskDescription, setTaskDescription] = useState(props.modal.taskDescription);
    const cancelChanges = () => {
        setTaskName(props.modal.taskName);
        setTaskDescription(props.modal.taskDescription);
        props.setEdit(false)
    };
    const saveChanges = ()=>{
        if (taskName === props.modal.taskName && taskDescription === props.modal.taskDescription)
        {return props.setEdit(false)}

        const modifiedTask = {
            taskName: taskName,
            taskDescription: taskDescription,
            taskUrgency: props.modal.taskUrgency,

            id: props.modal.id
        }
        props.modifyTask(modifiedTask)
    }
    

    useEffect(()=>{
        setTaskName(props.modal.taskName);
        setTaskDescription(props.modal.taskDescription)
    },[props.modal])

    if (!props.modal) {return null}
    return (
        <div className="modal" onClick={props.closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
             <div className="modal-header">
                {props.edit ? <div className="modal-title-margin"><input className="modal-title-input" value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input></div>:
                <h3 className="modal-title">{taskName}</h3>
                }
             </div>
                {props.edit ? 
                <textarea className="modal-body-edit" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></textarea> : 
                <textarea className="modal-body" value={taskDescription}></textarea> }
             <div className="modal-footer">
                <div className="modal-buttons">
                {props.edit ? <div className="modal-buttons">
                    <button className="modal-button" onClick={()=>{saveChanges()}}>Save</button>
                    <button className="modal-button" onClick={()=>{cancelChanges()}}>Cancel</button>
                </div>
                 :
                <button className="modal-button" onClick={()=>{props.setEdit(true)}}>Edit</button>}

                <button className="modal-button" onClick={props.closeModal}>Close</button>
                </div>
             </div>
            </div>
        </div>
    )
}
export default Modal;