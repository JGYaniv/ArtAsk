import React from 'react'

export default ({artist}) => (
    <div className="about-artist">
        <h1>Artist bio:</h1>
        <p>{artist.about}</p>
    </div>
)