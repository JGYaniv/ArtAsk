import React from 'react'
const dummyReview = {
    reviewer_photo_url: "",
    details: "",
    reviewer_name: "'"
}
export default (props) => {
    const review = props.review || dummyReview

    return (
        <>
            <div className="left-col">
            <img className="profile-picture" width="100px" src={props.artist.photo_url}/>
                {/* <a>View Profile & Reviews</a> */}
                <button onClick={props.handleSelect}>Select & Continue</button>
                {/* <p>You can chat with your artists, adjust project detailsm or change project timeline after confirming.</p> */}
            </div>
            <div className="right-col">
                <div><h1>{props.artist.first_name} {props.artist.last_name.slice(0,1)}.</h1></div>
                <ul>
                    <li>⭐️ <p>{Math.floor(Math.random() * 20) + 10} Completed ArtAsk Projects</p></li>
                    <li>👍 <p>{Math.floor(Math.random() * 20) + 80}% Positive Reviews</p></li>
                </ul>
                <h4>How I can help:</h4>
                <p>{props.artist.about}</p>
                <div className="artist-review">
                    <img className="mini-profile-picture" src={review.reviewer_photo_url}></img>
                    <div className="review-text">
                        <p className="review-quote">{review.details}</p>
                        <p>{review.reviewer_name}. -{`${review.created_at}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}