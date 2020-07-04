import React, {useState, useEffect} from 'react';
import MenuBar from '../menu_bar/menu_bar'
import Header from './artist_page_components/header'
import ArtistNavBar from './artist_page_components/nav_bar'
import ReviewItem from './artist_page_components/review_item'
import About from './artist_page_components/about'

export default (props) => {
    const [navState, setNavState] = useState("Reviews")

    useEffect(() => {
        props.getUser(props.currentArtistId)
    }, [])

    const artist = props.currentArtist
    const reviews = props.reviews.map(review => <ReviewItem key={review.id} review={review} reviewer={props.users[review.reviewerId]}/>)
    console.log(reviews)

    return (
        <>
            <MenuBar />
            <Header artist={artist} />
            <ArtistNavBar navState={navState} setNavState={setNavState} />
            {navState === "Reviews" ? <div className="artist_reviews">{reviews}</div> : <About artist={artist}/>}
        </>
    )
}