import React from 'react'
import Interest from './1_describe_task_components/a_describe_interest'
import Address from './1_describe_task_components/b_describe_address'
import Options from './1_describe_task_components/c_describe_options'
import Details from './1_describe_task_components/d_describe_details'

export default (props) => {

    const completePage = () => {
        if (props.errors.length === 0){
            props.setFormStep(2)
        }
    }

    const complete = (fields, currentComponent, nextComponent) => (
        (e) => {
            e.preventDefault()
            const errors = {}
            fields.forEach(field => {
                
                if (props.state.describe[field] === "") {
                    errors[field] = "Cannot be blank"
                } else {
                    errors[field] = ""
                }
            })
            props.setLocalErrors(errors)
            if (fields.every(field => errors[field] === "")){
                props.addCompletedFormSection(currentComponent)
                props.setFocusSection(nextComponent)
            }
        }
    )

    const checkCompleted = (sectionName) => props.state.completedFormSections.includes(sectionName)
    const assignCompleted = (sectionName) => (checkCompleted(sectionName) ? "completed" : "")
    const assignFocused = (sectionName) => (props.state.focusSection === sectionName ? "focused" : "")
    const assignOnClick = (sectionName) => checkCompleted(sectionName) ? () => props.setFocusSection(sectionName) : null;
    return (
        <>
            <div className="form-banner">
                <p>Tell us about your project! We use these details to show Artists who fit your needs.</p>
            </div>
            <div className="form-page">
                <div className="task-title"><h1>{props.taskType.title || "pick a task yo"}</h1></div>
                <Interest {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick} />
                <Address {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick}  />
                <Options {...props} complete={complete} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick}  />
                <Details {...props} complete={complete} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick} completePage={completePage} />
            </div>

        </>
    )
}