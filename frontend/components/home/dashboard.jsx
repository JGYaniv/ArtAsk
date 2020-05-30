import React from 'react'
import MenuBar from '../menu_bar/menu_bar_container'
import HeaderNotifications from '../header_notifications/header_notifications_container'

export default () => (
    <>
        <HeaderNotifications />
        <MenuBar />
        <div className="stuff">Hi! I'm stuff.</div>
    </>
)