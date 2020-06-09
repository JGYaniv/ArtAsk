import React, {useState} from 'react'

export default ({
    task,
    taskType,
    artist
}) => {
    const [expanded, setExpanded] = useState(false)

    const expandedMenu = () => (<><li>Hide Details</li><li>Cancel Task</li>{/* <li>Give us Artist Feedback</li> */}</>)
    const shortenedMenu = () => (<><li>View More Details</li></>)

    render (
        <div className="task-item">
            <div className="header">
                <div className="title">
                    <h1>{taskType.title}</h1>
                </div>

                <div className="summary">
                    <span>
                        <img src={artist.photo_url} />
                        <h2>{artist.first_name} {artist.last_name.slice(0,1)}</h2>
                    </span>

                    <span>
                        <p>🗓</p>
                        <p>{task.start_date.toDateString()}</p>
                    </span>

                    <span>
                        <p>🕘</p>
                        <p>{task.start_date.toLocaleTimeString('en-US')}</p>
                    </span>
                </div>
            </div>

            <div className="details">
                <div className="location">
                    <h3>Location</h3>
                    <p>{task.street_address} {task.apartment_number}</p>
                </div>

                <div className="artist">
                    <h3>Artist</h3>
                    <p>{artist.first_name} {task.last_name.slice(0,1)}</p>
                </div>

                <div className="description">
                    <h3>Description</h3>
                    <p>{task.details}</p>
                </div>
                {/* <ul className="options">
                    <li>{task.revisions}</li>
                    <li>{task.size}</li>
                </ul> */}
                <nav className="details-menu">
                    { expanded ? expandedMenu : shortenedMenu }
                </nav>
            </div>
        </div>
    )
}