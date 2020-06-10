import React, {useState, useEffect} from 'react'
import TaskItem from './my_task_item'
export default ({
    tasks,
    getTasks,
    deleteTask,
    completedTasks,
    currentTasks,
    currentUser,
    users,
    taskTypes
}) => {
    const [activeTab, setActiveTab] = useState("current")

    useEffect(() => {
        console.log(tasks)
        getTasks(currentUser.id)
    }, []) //why do we need to pass the [] arg? not sure what is causing it to constantly update...

    const currentTasksList = currentTasks.map(
        (task, idx) => <TaskItem 
            key={idx}
            task={task} 
            deleteTask={deleteTask}
            taskType={taskTypes[task.task_type_id]} 
            artist={users[task.artist_id]} 
        />
    )

    const completedTasksList = completedTasks.map(
        task => <TaskItem 
            task={task} 
            taskType={taskTypes[task.task_type_id]} 
            artist={artists[task.artist_id]} 
        />
    )

    return (
        <div className="my-tasks-page">
            <nav className="my-tasks-nav">
                <li className={`current-tab ${activeTab === "current" ? "activated" : ""}`} onClick={e => setActiveTab("current")}>CURRENT</li>
                <li className={`completed-tab ${activeTab === "completed" ? "activated" : ""}`} onClick={e => setActiveTab("completed")}>COMPLETED</li>
            </nav>
            { activeTab === "current" ? currentTasksList : completedTasksList }        
        </div>
    )
}