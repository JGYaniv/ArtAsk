import React from 'react'
import MenuBar from '../menu_bar/menu_bar_container'
import HeaderNotifications from '../header_notifications/header_notifications_container'

export default () => (
    <>
        <HeaderNotifications />
        <MenuBar mode="splash"/>
        <div className="stuff">
            <p></p>
            <p>Hi! I'm stuff.</p>
            <p></p>
            <p>Why don't you try loggin in fam?</p>
        </div>
    </>
)