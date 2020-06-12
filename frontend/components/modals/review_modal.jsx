import React, {useState, useEffect} from 'react'
import Signup from "../session/signup"

export default ({
    clearErrors,
    closeModal,
    postReview,
    errors,
    reviewTask,
    reviewArtist,
    currentUser
}) => {

    const [starCount, setStarCount] = useState(0)
    const [reviewDetails, setReviewDetails] = useState("")
  
    const clickHandler = num => setStarCount(num)
    const starChart = {
        0: "",
        1: "Bad",
        2: "Not good",
        3: "Passable",
        4: "Good",
        5: "Excellent",
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const review = {
            user_id: currentUser.id,
            artist_id: reviewArtist.id,
            task_id: reviewTask.id,
            rating: starCount,
            details: reviewDetails,
        }
        postReview(review)
        closeModal()
    }
    return (
        <div className="review-modal">
            <div className="review-modal-header">
                <div className="artist-photo">
                    <img src={reviewArtist ? reviewArtist.photo_url : ""} alt="artist-photo"/>
                </div>
                <h1>We value your feedback</h1>
                <p>This feedback will show up on an Artists' public profile and reviews.</p>
            </div>
            <div className="rating-section">
                <h2>Overall, how would you rate {reviewArtist ? reviewArtist.first_name : ""}</h2>
                <ul className="stars">
                    <li onClick={() => clickHandler(1)}>{starCount >= 1 ? "★" : "☆"}</li>
                    <li onClick={() => clickHandler(2)}>{starCount >= 2 ? "★" : "☆"}</li>
                    <li onClick={() => clickHandler(3)}>{starCount >= 3 ? "★" : "☆"}</li>
                    <li onClick={() => clickHandler(4)}>{starCount >= 4 ? "★" : "☆"}</li>
                    <li onClick={() => clickHandler(5)}>{starCount >= 5 ? "★" : "☆"}</li>
                </ul>
                <p>{starChart[starCount]}</p>
            </div>
            <div className="description-section">
                <h2>Please leave a public review for {reviewArtist ? reviewArtist.first_name : ""}</h2>
                <textarea value={reviewDetails} onChange={e => setReviewDetails(e.target.value)}></textarea>
            </div>
            
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}