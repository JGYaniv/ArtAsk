import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({navState, setNavState}) => {
    const clickHandler = e => setNavState(e.target.innerHTML)
    return (
        <div className="artist-nav-bar">
            <p onClick={clickHandler} className={navState === "Reviews" ? "selected" : ""}>Reviews</p>
            <p onClick={clickHandler} className={navState === "About" ? "selected" : ""}>About</p>
        </div>
    )
}