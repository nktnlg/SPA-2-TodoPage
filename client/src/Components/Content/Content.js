import React, { useEffect, useState } from "react";
import "./Content.css"
import CreateTask from "./CreateTask";
import TaskColumn from "./TaskColumn";
import Modal from "./Modal";

//CONTEXT
export const FuncContext = React.createContext();

const Content = ()=>{

    //STATES
    const [modal, setModal] = useState('')

    const [tasks, setTasks] = useState([])
    const [tasksHighUrgence, setTasksHighUrgence] = useState([])
    const [tasksAverageUrgence, setTasksAverageUrgence] = useState([])
    const [tasksLowUrgence, setTasksLowUrgence] = useState([])
    // MODAL
    const openTaskModal = (task) => { setModal(task)};
    const closeTaskModal = () => {setModal('')};

    //NEW TASK
    const addNewTask = (newTask) => {
        localStorageAddNewTask(newTask);
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    };

    const localStorageAddNewTask = (newTask) => {
        if(localStorage.getItem('tasks') === null) {
            const tasks = [];
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks))        
        } else {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks))     
        }
    };

    //DELETE TASK
    const deleteTask = (deletedTaskId) => {
        const newTasks = tasks.filter(task => task.id !== deletedTaskId)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    };


    //USE EFFECTS

    useEffect(()=>{
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [])
    useEffect(()=>{
        setTasksHighUrgence(tasks.filter(task => task.taskUrgency === 'High'));
        setTasksAverageUrgence(tasks.filter(task => task.taskUrgency === 'Average'));
        setTasksLowUrgence(tasks.filter(task => task.taskUrgency === 'Low'));
    }, [tasks])

    

    //HTML



    return (
    <div id="content"  className="content">
        <div id="create-tasks-card" className="card">
            <CreateTask addNewTask={addNewTask}/>
        </div>
        <div id="show-tasks-card" className="card show-tasks-card">
            <FuncContext.Provider value={{deleteTask, openTaskModal}}>
                <TaskColumn title="Urgent" tasks={tasksHighUrgence}/>
                <TaskColumn title="To do" tasks={tasksAverageUrgence}/>
                <TaskColumn title="Low Priority" tasks={tasksLowUrgence}/>
            </FuncContext.Provider>
        </div>
        <Modal modal={modal} closeModal={closeTaskModal}/>
    </div>)
};

export default Content