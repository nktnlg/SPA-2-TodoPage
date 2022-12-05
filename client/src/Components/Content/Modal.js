import React from "react";
import "./Task.css"
const Modal = props => {
    if (!props.modal) {return null}
    return (
        <div className="modal" onClick={props.closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
             <div className="modal-header">
                <h3 className="modal-title">{props.modal.taskName}</h3>
             </div>
             <div className="modal-body" > {props.modal.taskDescription}</div>
             <div className="modal-footer">
                <button className="modal-button" onClick={props.closeModal}>close</button>
             </div>
            </div>
        </div>
    )
}
export default Modal;