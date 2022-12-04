import React, { useEffect, useState } from "react";
import "./Content.css"
import CreateTask from "./CreateTask";
import TaskColumn from "./TaskColumn";

const Content = ()=>{
    const [tasks, setTasks] = useState([])
    const [tasksHighUrgence, setTasksHighUrgence] = useState([])
    const [tasksAverageUrgence, setTasksAverageUrgence] = useState([])
    const [tasksLowUrgence, setTasksLowUrgence] = useState([])

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask])
    };

    useEffect(()=>{
        setTasksHighUrgence(tasks.filter(task => task.taskUrgency == 'High'));
        setTasksAverageUrgence(tasks.filter(task => task.taskUrgency == 'Average'));
        setTasksLowUrgence(tasks.filter(task => task.taskUrgency == 'Low'));
    }, [tasks])

    return (
    <div id="content"  className="content">
        <div id="create-tasks-card" className="card">
            <CreateTask addNewTask={addNewTask}/>
        </div>
        <div id="show-tasks-card" className="card show-tasks-card">
            <TaskColumn title="Urgent" tasks={tasksHighUrgence}/>
            <TaskColumn title="To do" tasks={tasksAverageUrgence}/>
            <TaskColumn title="Low Priority" tasks={tasksLowUrgence}/>
        </div>
    </div>)
};

export default Content