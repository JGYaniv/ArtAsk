import React, {useState, useEffect} from 'react'

export default ({
    task,
    taskType = {title: ""},
    artist,
    deleteTask,
    updateTask,
    mode
}) => {
    const [expanded, setExpanded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const dateTime = new Date(task.start_date)
    const date = dateTime.toDateString()
    const time = dateTime.toLocaleTimeString('en-US')

    const hide = () => setExpanded(false)
    const show = () => setExpanded(true)
    const remove = () => {deleteTask(task.id) ; hide()}
    const complete = () => {updateTask({ id: task.id, completed: true }) ; hide}

    const ExpandedMenu = () => (
        <>
            <li onClick={hide}>Hide Details</li>
            {mode === "current" ? <li onClick={remove}>Cancel Task</li> : ""}
            {/* <li>Give us Artist Feedback</li> */}
        </>
    )

    const ShortenedMenu = () => (
        <>
            <li onClick={show}>View More Details</li>
        </>
    )

    const DropMenu = () => (
        <>
            <div className="box-pointer" />
            <ul>
                <li onClick={complete}>Mark Completed</li>
                <li onClick={remove}>Cancel Task</li>
            </ul>
        </>
    )
        
    return (
        <div className="task-item">
            <div className="header">
                <div className="title">
                    <h1>{taskType.title}</h1>
                    {mode === "completed" ? "" : (
                        <div className="menu-button" 
                            tabIndex="0"
                            onFocus={() => {setMenuOpen(true)}} 
                            onBlur={() => setInterval(() => setMenuOpen(false), 100)} >
                                <p>...</p>
                            <ul className={`${menuOpen ? "reveal" : "hidden"}`} tabIndex="0">
                                    <li className={`box-pointer ${menuOpen ? "reveal" : "hidden"}`} tabIndex="0"/>
                                    <li onClick={complete}>Mark Completed</li>
                                    <li onClick={remove}>Cancel Task</li>
                                </ul>
                        </div>
                    )}
                </div>

                <div className="summary">
                    <span>
                        <img src={artist.photo_url} />
                        <h2>{artist.first_name} {artist.last_name.slice(0,1)}</h2>
                    </span>

                    <span>
                        <h2>🗓</h2>
                        <h2>{date}</h2>
                    </span>

                    <span>
                        <h2>🕘</h2>
                        <h2>{time}</h2>
                    </span>
                </div>
            </div>

            <div className={`details`}>
                <span>
                    <div className={`location ${expanded ? "expanded" : ""}`}>
                        <h3>Location</h3>
                        { task.address ? (
                            <p>📍 {task.address} </p>
                        ) : (
                            <p>📍 123 Somewhere Street, apartment 5</p>
                        )}
                    </div>
                    <div className={`artist ${expanded ? "expanded" : ""}`}>
                        <h3>Artist</h3>
                        <p>{artist.first_name} {artist.last_name.slice(0,1)}</p>
                    </div>
                </span>

                <div className={`description ${expanded ? "expanded" : ""}`}>
                    <h3>Description</h3>
                    <p>{task.details}</p>
                </div>
                {/* <ul className="options">
                    <li>{task.revisions}</li>
                    <li>{task.size}</li>
                </ul> */}
            <nav className="details-menu">
                { expanded ? <ExpandedMenu/> : <ShortenedMenu/> }
            </nav>
            </div>
        </div>
    )
}