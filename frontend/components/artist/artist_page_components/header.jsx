import React from 'react'

export default ({artist}) => {
    if (artist){
        return (
            <div className="artist-header">
                <img className="profile-picture" src={artist.photo_url}/>
                <div className="artist-name">
                    <h1>{artist.first_name + " " + artist.last_name}</h1>
                </div>
            </div>
        )
    }  else {
        return <></>
    }
}