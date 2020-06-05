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
        this.state = {
            form_step: "",
            forms_completed: [],
            task_size: "",
            status: "",
            location: "",
            details: "",
            start_date: "",
            end_date: "",
            artist_id: "",
            task_type_id: "",
            task_type_title: "",
            interest: "",
            local_errors: {}    
        }
        
        this.setFormStep = this.setFormStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount(){
        this.setFormStep(1)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            this.forceUpdate()
        }
    }

    handleSave(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            this.forceUpdate()
        }
    }

    setFormStep(step){
        this.setState({form_step: step})
        this.forceUpdate();
    }

    render(){
        if (this.props.taskTypeId){
            let CurrentForm;
            window.formState = this.state;
            switch (this.state.form_step){
                case 1:
                    CurrentForm = (props) => <DescribeTask {...props} />; break;
                case 2:
                    CurrentForm = (props) => <SelectArtist {...props}/>; break;
                case 3:
                    CurrentForm = (props) => <SelectTime {...props}/>; break;
                case 4:
                    CurrentForm = (props) => <Confirm {...props}/>; break;
                default:
                    CurrentForm = (props) => <DescribeTask {...props}/>; break;
            }
            return(
                <>  
                    <ProgressBar 
                        step={this.state.form_step} 
                        setFormStep={this.setFormStep}/>
                    <CurrentForm 
                        taskType={this.props.taskTypes[this.props.taskTypeId]}
                        artists={this.props.artists}
                        closeModal={this.props.closeModal}
                        currentUser={this.props.currentUser}
                        errors={this.props.errors}
                        handleChange={this.handleChange}
                        handleSave={this.handleSave}
                        openModal={this.props.openModal}
                        postTask={this.props.postTask}
                        setFormStep={this.setFormStep}
                        state={this.state}
                    />
                </>
            )
        } else { return <Redirect to="/" /> }
    }
}