import React from 'react'
const dummyReviewer = {
    photo_url: "",
    last_name: "",
    first_name: "'"
}

export default ({
    review,
    reviewer,
    artist,
    handleSelect
}) => {
    return (
        <>
            <div className="left-col">
            <img className="profile-picture" width="100px" src={artist.photo_url}/>
                {/* <a>View Profile & Reviews</a> */}
                <button onClick={handleSelect}>Select & Continue</button>
                {/* <p>You can chat with your artists, adjust project detailsm or change project timeline after confirming.</p> */}
            </div>
            <div className="right-col">
                <div><h1>{artist.first_name} {artist.last_name.slice(0,1)}.</h1></div>
                <ul>
                    <li>⭐️ <p>{Math.floor(Math.random() * 20) + 10} Completed ArtAsk Projects</p></li>
                    <li>👍 <p>{Math.floor(Math.random() * 20) + 80}% Positive Reviews</p></li>
                </ul>
                <h4>How I can help:</h4>
                <p>{artist.about}</p>
                <div className="artist-review">
                    <img className="mini-profile-picture" src={reviewer.photo_url}></img>
                    <div className="review-text">
                        <p className="review-quote">{review.details}</p>
                        <p>{reviewer.first_name} {reviewer.last_name.slice(0,1)}. -{`${review.created_at}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}