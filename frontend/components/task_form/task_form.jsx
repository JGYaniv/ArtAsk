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
        this.props.getTaskTypes()
        let storedState = {};
        if (window.localStorage.getItem("task_form")) {
            storedState = JSON.parse(window.localStorage.getItem("task_form"))
        }

        this.state = Object.assign({}, this.props.taskForm, {localErrors: {}, completedFormSections: [], focusSection: null}, storedState)

        this.setFormStep = this.setFormStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setLocalError = this.setLocalError.bind(this)
        this.setLocalErrors = this.setLocalErrors.bind(this)
        this.addCompletedFormSection = this.addCompletedFormSection.bind(this)
        this.setFocusSection = this.setFocusSection.bind(this)
        this.removeCompleted = this.removeCompleted.bind(this)
    }

    componentDidMount(){
        if (this.state.form_step === "") { this.setFormStep(1) }
        if (this.props.taskTypeId){
            this.props.getTaskTypeArtists(this.props.taskTypeId)
            this.props.getTaskTypeReviews(this.props.taskTypeId)
        }
    }

    componentDidUpdate(){
        window.localStorage.setItem("task_form", JSON.stringify(this.state))
    }

    handleChange(form, type) {
        return (e) => {
            const newState = Object.assign({}, this.state)
            newState[form][type] = e.target.value
            this.setState(newState)
            window.localStorage.setItem("task_form", JSON.stringify(this.state))
        }
    }

    addCompletedFormSection(formName){
        if (this.state.completedFormSections.includes(formName)){
        } else {
            let completed = Object.assign([], this.state.completedFormSections)
            completed.push(formName)
            this.setState({ completedFormSections: completed })
            this.forceUpdate();
        }
    }

    setFormStep(step){
        this.setState({ form_step: step })  
    }

    setFocusSection(sectionName){
        this.setState({ focusSection: sectionName})
    }

    removeCompleted(sectionName){
        let completed = Object.assign([], this.state.completedFormSections)
        let removeIdx = completed.indexOf(sectionName)
        delete completed[removeIdx]
        this.setState({ completedFormSections: completed})
    }

    setLocalError(component, message){
        const errors = Object.assign({}, this.state.localErrors)
        errors[component] = message
        this.setState({ localErrors: errors })
        this.forceUpdate();
    }

    setLocalErrors(newErrors){
        const errors = Object.assign({}, this.state.localErrors, newErrors)
        this.setState({ localErrors: errors })
        this.forceUpdate();
    }
    render(){
        if (this.props.taskTypeId){
            let CurrentForm;
            window.formState = this.state
            switch (this.state.form_step){
                case 1:
                    CurrentForm = (props) => <DescribeTask {...props} />; break;
                case 2:
                    CurrentForm = (props) => <SelectArtist {...props}/>; break;
                case 3:
                    CurrentForm = (props) => (
                        <>
                            <SelectArtist {...props}/>
                            <SelectTime {...props} />
                        </>
                    );
                    break;
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
                        users={this.props.users}
                        reviews={this.props.reviews}
                        closeModal={this.props.closeModal}
                        currentUser={this.props.currentUser}
                        errors={this.props.errors}
                        handleChange={this.handleChange}
                        openModal={this.props.openModal}
                        postTask={this.props.postTask}
                        removeCompleted={this.removeCompleted}
                        receiveDescribeForm={this.props.receiveDescribeForm}
                        receiveArtistForm={this.props.receiveArtistForm}
                        setFocusSection={this.setFocusSection}
                        setFormStep={this.setFormStep}
                        setLocalError={this.setLocalError}
                        setLocalErrors={this.setLocalErrors}
                        addCompletedFormSection={this.addCompletedFormSection}
                        state={this.state}
                    />
                </>
            )
        } else { return <Redirect to="/" /> }
    }
}