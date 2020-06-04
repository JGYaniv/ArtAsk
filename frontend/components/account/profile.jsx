import React from 'react'
import {Link} from 'react-router-dom'
export default (props) => (
    <div>
        <span className='account-header'>
            <h2 className='account-title'>Account</h2>
            <Link to="/account/edit"><button>Edit</button></Link>
        </span>
        <div className="profile-cols">
            <div className="left-col">
                <img src={props.currentUser.photoUrl} className="profilePic"></img>
            </div>
            <div className='right-col'>
                <ul>
                    <li>👤 {props.currentUser.first_name} {props.currentUser.last_name}</li>
                    <li>📪 {props.currentUser.email}</li>
                    <li>📍 {props.currentUser.area_code}</li>
                </ul>
                <button onClick={props.logout}>Log Out</button>
            </div>
        </div>
    </div>
)