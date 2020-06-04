import React from 'react'
import MenuBar from '../menu_bar/menu_bar'
import TaskExplorer from './dashboard/task_explorer_container'
import FooterMenu from '../menu_bar/footer_menu'

export default () => (
    <>
        <MenuBar />
        <TaskExplorer />
        <FooterMenu />
    </>
)