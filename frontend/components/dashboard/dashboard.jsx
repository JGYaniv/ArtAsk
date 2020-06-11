import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MyTasks from '../my_tasks/my_tasks_container'
import MenuBar from '../menu_bar/menu_bar'
import TaskExplorer from './task_explorer_container'
import FooterMenu from '../menu_bar/footer_menu'

export default () => (
    <>
        <MenuBar />
        <Switch>
            <Route path="/active" component={MyTasks} />
            <Route path="/" component={TaskExplorer}/>
        </Switch>
        <FooterMenu />
    </>
)