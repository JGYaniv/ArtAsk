import React, {useState} from 'react'

export default ({
    task,
    taskType = {title: ""},
    artist
}) => {
    const [expanded, setExpanded] = useState(false)
    const dateTime = new Date(task.start_date)
    const date = dateTime.toDateString()
    const time = dateTime.toLocaleTimeString('en-US')
    const ExpandedMenu = () => (<><li>Hide Details</li><li>Cancel Task</li>{/* <li>Give us Artist Feedback</li> */}</>)
    const ShortenedMenu = () => (<><li>View More Details</li></>)

    return (
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
                        <h2>🗓</h2>
                        <h2>{date}</h2>
                    </span>

                    <span>
                        <h2>🕘</h2>
                        <h2>{time}</h2>
                    </span>
                </div>
            </div>

            <div className="details">
                <span>
                    <div className="location">
                        <h3>Location</h3>
                        <p>📍 123 Somewhere Street, apartment 5</p>
                        {/* <p>{task.street_address} {task.apartment_number}</p> */}
                    </div>
                    <div className="artist">
                        <h3>Artist</h3>
                        <p>{artist.first_name} {artist.last_name.slice(0,1)}</p>
                    </div>
                </span>

                <div className="description">
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