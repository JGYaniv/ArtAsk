import React from 'react'

export default (props) => {
    return (
        <>
            <div className="left-col">
            <img className="profile-picture" width="100px" src={props.artist.photo_url}/>
                <a>View Profile & Reviews</a>
                <button onClick={props.handleSelect}>Select & Continue</button>
                <p>You can chat with your artists, adjust project detailsm or change project timeline after confirming.</p>
            </div>
            <div className="right-col">
                <div><h1>{props.artist.first_name} {props.artist.last_name}</h1></div>
                <ul>
                    <li>Completed ArtAsk Projects</li>
                    <li>Positive Reviews</li>
                </ul>
                <h4>How I can help:</h4>
                <p>I am a painter based in Tahitit. Don't contact me unless you're serious. Have been known to drive other artists crazy. JUST KIDDING! But really, I don't joke.</p>
                <div className="artist-review">
                    <img className="mini-profile-picture" width="50px" src="https://www.nationalgallery.org.uk/media/30115/gogh-vincent-van-c-face-half.jpg?center=0.43656716417910446,0.44407894736842107&mode=crop&width=430&bgcolor=fff&rnd=132138118510000000"></img>
                    <p>{props.review ? props.review.details : ""}<br/>
                    Vinny V. -September 23, 1888</p>
                </div>
            </div>
        </>
    )
}