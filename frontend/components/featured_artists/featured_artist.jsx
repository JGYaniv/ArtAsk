import React from 'react'
import {Link} from 'react-router-dom'

export default ({artist}) => (
    <div className="featured-artist">
        <img className="profile-picture" width="100px" src={artist.photo_url} />
        {/* <p>You can chat with your artists, adjust project detailsm or change project timeline after confirming.</p> */}
        <div><h1>{artist.first_name} {artist.last_name.slice(0, 1)}.</h1></div>
        <ul>
            <li>⭐️ <p>{Math.floor(Math.random() * 20) + 10} Completed ArtAsk Projects</p></li>
            <li>👍 <p>{Math.floor(Math.random() * 5) + 95}% Positive Reviews</p></li>
        </ul>
        <h4>How I can help:</h4>
        <p>{artist.about}</p>
        {/* <div className="artist-review">
            <div className="review-text">
                <p className="review-quote">{reviewer ? review.details : ""}</p>
                <p>{reviewer ? reviewer.first_name : ""} {reviewer ? `${reviewer.last_name.slice(0, 1)}. -${review.created_at}` : ""}</p>
            </div>
        </div> */}
        <Link to={`/artist/${artist.id}`}>View Profile & Reviews</Link>
    </div>
)