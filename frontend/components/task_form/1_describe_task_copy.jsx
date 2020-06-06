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

    const checkCompleted = (sectionName) => props.state.completedFormSections.includes(sectionName)
    const assignCompleted = (sectionName) => (checkCompleted(sectionName) ? "completed" : "")
    const assignFocused = (sectionName) => (props.state.focusSection === sectionName ? "focused" : "")
    const assignOnClick = (sectionName) => checkCompleted(sectionName) ? () => props.setFocusSection(sectionName) : null;
    return (
        <>
            <div className="task-title"><h1>{props.taskType.title || "pick a task yo"}</h1></div>
            <div className="form-banner">
                <p>Tell us about your project! We use these details to show Artists who fit your needs.</p>
            </div>
            <div className="form-page">
                <div id="interest" className={`form-section ${assignCompleted("interest")} ${assignFocused("interest")}`} >
                    <div className="form-section-header" onClick={assignOnClick("interest")}>
                        <h3>TASK INTEREST</h3>
                        <h4>{props.state.describe.interest}</h4>
                    </div>
                <Interest {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick} />
                </div>

                <div id="address" className={`form-section ${assignCompleted("address")} ${assignFocused("address")}`}>
                    <div className="form-section-header" onClick={assignOnClick("address")}>
                        <h3>TASK LOCATION</h3>
                        <h4>{props.state.describe.street_address}</h4>
                    </div>
                <Address {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick}  />
                </div>


                {/* <Options {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick}  /> */}
                <Details {...props} checkCompleted={checkCompleted} assignCompleted={assignCompleted} assignFocused={assignFocused} assignOnClick={assignOnClick} completePage={completePage} />
            </div>
        </>
    )
}