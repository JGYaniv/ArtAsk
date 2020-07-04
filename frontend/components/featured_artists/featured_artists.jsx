import React from 'react'
import FeaturedArtist from './featured_artist'

export default ({artists, taskTypes}) => {
    // hard code a task type to feature for demo purposes
    const tasks = [1, 2] //these are the only propperly seeded task types right now
    // const tasks = Object.values(taskTypes)

    const randomTaskId = tasks[Math.floor(Math.random() * tasks.length)]
    const selectedArtists = artists.filter(artist => artist.task_types.includes(randomTaskId)).slice(0, 3)

    const mappedArtists = selectedArtists.map(artist => <FeaturedArtist key={artist.id} artist={artist} />)

    return (
        <div className="featured-artists-section-background">
            <div className="featured-artists-section">
                <h1>Featured artists who {taskTypes[randomTaskId] ? taskTypes[randomTaskId].title : ""}s: </h1>
                <div className="featured-artists">
                    {mappedArtists}
                </div>
            </div>
        </div>
    )
}



