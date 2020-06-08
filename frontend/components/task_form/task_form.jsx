import React from 'react'
import {Redirect} from 'react-router-dom'

import ProgressBar from './progress_bar'
import DescribeTask from './1_describe_task'
import SelectArtist from './2_select_artist'
import SelectTime from './3_select_time'
import Confirm from './4_confirm'

export default class TaskForm extends React.Component {
    constructor(props){
        super(props)
        if (this.props.formStep === "") { 
            this.props.setFormStep(1) 
            this.props.setFocus("interest")
        }
    }

    componentWillMount(){
        if (Boolean(this.props.taskTypeId)){
            this.props.getTaskTypes()
            this.props.getTaskTypeArtists(this.props.taskTypeId)
            this.props.getTaskTypeReviews(this.props.taskTypeId)
        }
    }

    componentDidUpdate(){
        window.localStorage.setItem("task_form", JSON.stringify(this.props.taskForm))
    }

    render(){
        if (Boolean(this.props.taskTypeId)){
            let CurrentForm;
            switch (this.props.formStep){
                case 1:
                    CurrentForm = (props) => <DescribeTask {...props} />; break;
                case 2:
                    CurrentForm = (props) => <SelectArtist {...props}/>; break;
                case 3:
                    CurrentForm = (props) => (
                        <><SelectArtist {...props}/><SelectTime {...props} /></>
                    ); break;
                case 4:
                    CurrentForm = (props) => <Confirm {...props}/>; break;
                default:
                    CurrentForm = (props) => <DescribeTask {...props}/>; break;
            }

            return(
                <>  
                    <ProgressBar 
                        step={this.props.formStep} 
                        setFormStep={this.props.setFormStep} />
                    <CurrentForm 
                        taskForm={this.props.taskForm}
                        taskTypeId={this.props.taskTypeId}
                        taskType={this.props.taskTypes[this.props.taskTypeId]}
                        users={this.props.users}
                        reviews={this.props.reviews}
                        closeModal={this.props.closeModal}
                        currentUser={this.props.currentUser}
                        errors={this.props.errors}
                        openModal={this.props.openModal}
                        postTask={this.props.postTask}
                        updateDescribeForm={this.props.updateDescribeForm}
                        setDescribeForm={this.props.setDescribeForm}
                        setArtistForm={this.props.setArtistForm}
                        setTimeForm={this.props.setTimeForm}
                        setArtistForm={this.props.setArtistForm}
                        setFormStep={this.props.setFormStep}
                        setFocus={this.props.setFocus}
                        setError={this.props.setError}
                        clearError={this.props.clearError}
                        getTaskTypes={this.props.getTaskTypes}
                        getTaskTypeArtists={this.props.getTaskTypeArtists}
                        getTaskTypeReviews={this.props.getTaskTypeReviews} 
                        history={this.props.history} />
                </>
            )
        } else { return <Redirect to="/" /> }
    }
}