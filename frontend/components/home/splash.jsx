import React from 'react'
import MenuBar from '../menu_bar/menu_bar_container'
import HeaderNotifications from '../header_notifications/header_notifications_container'
import BannerCta from './splash/banner_cta'

export default () => (
    <>
        <HeaderNotifications />
        <MenuBar mode="splash"/>
        <BannerCta />
    </>
)