import React from 'react'
import MenuBar from '../menu_bar/menu_bar'
import BannerCta from './splash/banner_cta_container'
import FooterMenu from '../menu_bar/footer_menu'

export default () => (
    <>
        <MenuBar mode="splash"/>
        <BannerCta />
        <FooterMenu />
    </>
)