import React from 'react'

export default (props) => {
    const [activeTab, setActiveTab] = useState("current")
    const currentTasks = []
    const completedTasks = []

    return (
        <>
            <nav className="my-tasks-nav">
                <li className="current-tab" onClick={e => setActiveTab("current")}>CURRENT</li>
                <li className="completed-tab" onClick={e => setActiveTab("completed")}>COMPLETED</li>
            </nav>
            { activeTab === "current" ? currentTasks : completedTasks}        
        </>
    )
}