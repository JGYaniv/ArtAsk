import React, {useState, useEffect} from 'react'
import TaskItem from './my_task_item'
export default ({
    tasks,
    getTasks,
    deleteTask,
    completedTasks,
    updateTask,
    currentTasks,
    currentUser,
    users,
    taskTypes,
}) => {
    const [activeTab, setActiveTab] = useState("current")

    var currentTasksList = currentTasks.map(
        (task, idx) => <TaskItem 
            key={idx * 67890}
            task={task} 
            deleteTask={deleteTask}
            taskType={taskTypes[task.task_type_id]} 
            artist={users[task.artist_id]} 
            updateTask={updateTask}
            mode="current"
        />
    )

    const completedTasksList = completedTasks.map(
        (task, idx) => <TaskItem
            key={idx * 12345} 
            task={task} 
            taskType={taskTypes[task.task_type_id]} 
            artist={users[task.artist_id]}
            mode="completed"
        />
    )

    useEffect(() => {
        getTasks(currentUser.id)
    }, []) //why do we need to pass the [] arg? not sure what is causing it to constantly update...

    const navButtons = [
        <li key={100000} className={`current-tab ${activeTab === "current" ? "activated" : ""}`} onClick={e => setActiveTab("current")}>CURRENT</li>,
        <li key={200000}  className={`completed-tab ${activeTab === "completed" ? "activated" : ""}`} onClick={e => setActiveTab("completed")}>COMPLETED</li>
    ]

    if (currentTasksList && currentTasksList.length === 0) {
        currentTasksList = [<img key="666" src="https://i.imgur.com/TQT2wQ8.jpg" />]
    }

    return (
        <div className="my-tasks-page">
            <nav className="my-tasks-nav">
                {completedTasksList.length > 0 ? navButtons : navButtons.slice(0, 1)}
            </nav>
            {activeTab === "current" ? currentTasksList : completedTasksList}
            <div className="my-tasks-cta">
                <h1>Got another project you're working on?</h1>
                <h2>Find another artist volunteer to collaborate with on ArtAsk!</h2>
                <a href="/"><button>Search Artists</button></a>
            </div>
        </div>
    )
}