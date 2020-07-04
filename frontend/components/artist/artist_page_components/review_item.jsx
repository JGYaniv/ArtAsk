import React from 'react'

export default ({review, reviewer}) => {
    var stars;
    switch (review.rating){
        case 5: stars = <p className="star">★★★★★</p>; break;
        case 4: stars = <p className="star">★★★★☆</p>; break;
        case 3: stars = <p className="star">★★★☆☆</p>; break;
        case 2: stars = <p className="star">★★☆☆☆</p>; break;
        case 1: stars = <p className="star">★☆☆☆☆</p>; break;
    }
    <span className="stars"></span>
    return (
        <div className="review-item">
            <div className="artist-review">
                <img className="mini-profile-picture" src={reviewer ? reviewer.photo_url : ""}></img>
                <div className="review-text">
                    <p className="review-quote">{reviewer ? review.details : ""}</p>
                    <p>{reviewer ? reviewer.first_name : ""} {reviewer ? `${reviewer.last_name.slice(0, 1)}. -${review.created_at}` : ""}</p>
                </div>
            </div>
        </div>
    )
}