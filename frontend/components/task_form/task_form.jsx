import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ProgressBar from './progress_bar'
import DescribeTask from './1_describe_task'
import SelectArtist from './2_select_artist'
import SelectTime from './3_select_time'
import Confirm from './4_confirm'

export default class TaskForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form_step: 1,
            task_size: "",
            status: "",
            location: "",
            details: "",
            start_date: "",
            end_date: "",
            artist_id: ""    
        }
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            this.forceUpdate()
        }
    }

    handleSubmit(e){

    }


    render(){
        return(
            <>
                <ProgressBar />
                <Switch>
                    <Route render={(props) => <DescribeTask {...props}

                    />}/>
                    <Route render={(props) => <SelectArtist {...props}
                    
                    />}/>
                    <Route render={(props) => <SelectTime {...props}
                    />}/>
                    <Route render={(props) => <Confirm {...props}/>}
                    />
                </Switch>

            </>
        )
    }
}