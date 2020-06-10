import React from 'react'
import SortMenu from './2_select_artist_components/sort_menu'
import ArtistDisclaimer from './2_select_artist_components/artist_disclaimer'
import DateFilter from './2_select_artist_components/date_filter'
import TypeFilter from './2_select_artist_components/type_filter'
import ArtistListItem from './2_select_artist_components/artist_list_item'

export default ({
    users,
    reviews,
    setArtistForm,
    setFormStep
}) => {
    let artistList = [];
    if (Object.values(users).length > 0){
        let userList = Object.values(users)
        let artists = userList.filter(user => user.account_type === "artist")
        artistList = artists.map((artist, idx) => {
            let firstReview = reviews[artist.review_ids[0]]
            let handleSelect = () => {
                setArtistForm({ artist_id: artist.id })
                setFormStep(3)
            }
            return (
                <div className="form-section artist" key={idx * Math.floor(Math.random() * 100000000000)}>
                    <ArtistListItem 
                        artist={artist} 
                        review={firstReview}
                        reviewer={users[firstReview.user_id]} 
                        setArtistForm={setArtistForm} 
                        handleSelect={handleSelect}
                    />
                </div>
            )
        })
        
    }

    return (
        <>
            <div className="form-banner">
                <p>Filter and sort to find your artist. Then view their availability to request their help.</p>
            </div>
            {/* <div className="artists sort-menu">
                <SortMenu />
            </div> */}
            <div className="form-page artists">
                <div className="filters">
                    <ArtistDisclaimer />
                    {/* <DateFilter /> */}
                    {/* <TypeFilter /> */}
                </div>
                <div className="form-page select-artist">
                    {artistList}
                </div>
            </div>
        </>
    )
}