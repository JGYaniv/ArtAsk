import React, {useState} from 'react'

export default (props) => {
    const [streetAddress, setStreetAddress] = useState("");
    const [apartmentNumber, setApartmentNumber] = useState("");
    const [details, setDetails] = useState("");

    const completePage = () => {
        if (props.errors.length === 0){
            props.setFormStep(2)
        }
    }

    const completeInterest = (e) => {
        e.preventDefault()
        if (props.state.describe.interest === ""){
            props.setLocalError("interest", "Please select an option before continuing!")
        } else {
            props.setLocalError("interest", "")
            props.addCompletedFormSection("interest")
            props.setFocusSection("address")
        }
    }

    const updateInterest = (e) => {
        e.preventDefault()
        if (props.state.describe.interest === ""){
            props.setLocalError("interest", "Please select an option before continuing!")
        } else {
            props.setLocalError("interest", "")
            props.addCompletedFormSection("interest")
            props.setFocusSection("address")
        }
    }

    const completeAddress = (e) => {
        e.preventDefault()
        if (props.state.describe.street_address === ""){
            props.handleChange("describe", "location").bind({ target: { value: "remote" } })
        } else {
            props.addCompletedFormSection("address")
            props.setFocusSection("options")
        }
    }

    const updateAddress = (e) => {
        e.preventDefault()
        if (props.state.describe.street_address === ""){
            props.handleChange("describe","location").bind({target: {value: "remote"}})
        } else {
            props.addCompletedFormSection("address")
            props.setFocusSection("options")
        }
    }

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
                <div id="interest" className={`form-section ${assignCompleted("interest")} ${assignFocused("interest")}`} >
                    <div className="form-section-header" onClick={assignOnClick("interest")}>
                        <h3>TASK INTEREST</h3>
                        <h4>{props.state.describe.interest}</h4>
                    </div>
                    <form className="interest-form">
                        <h1>What brings you here today?</h1>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange("describe","interest")} 
                                value="ready" 
                                checked={ (props.state.describe.interest === "ready") ? true : false}/>
                            <label>I'm ready to book right now</label>
                        </span>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange("describe","interest")} 
                                value="interested" 
                                checked={(props.state.describe.interest === "interested") ? true : false} />
                            <label>I'm interested in booking soon</label>
                        </span>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange("describe","interest")} 
                                value="browsing" 
                                checked={(props.state.describe.interest === "browsing") ? true : false} />
                            <label>I'm just browsing</label>
                        </span>
                        <div>
                            <p className="inline-error">{props.state.localErrors.interest}</p>
                        </div>
                        <div>
                            { checkCompleted("interest") ? 
                                <input type="submit" value="Save" onClick={updateInterest}/> : 
                                <input type="submit" value="Continue" onClick={completeInterest} />
                            }
                        </div>
                    </form>
                </div>
                <div id="address" className={`form-section ${assignCompleted("address")} ${assignFocused("address")}`}>
                    <div className="form-section-header" onClick={assignOnClick("address")}>
                        <h3>TASK LOCATION</h3>
                        <h4>{props.state.describe.street_address}</h4>
                    </div>
                    <form className="address-form">
                        <h1>Leave blank if this is a remote project.</h1><br />
                        <input className="street-address" 
                            type="text" 
                            onChange={(e) => setStreetAddress(e.target.value)}
                            value={streetAddress}/>
                        <input className="apartment-number"
                            type="text" 
                            onChange={props.handleChange("describe", "apartment_number")}
                            value={props.state.describe.apartment_number} />
                        <div>
                            {checkCompleted("address") ?
                                <input type="submit" value="Save" onClick={updateAddress} /> :
                                <input type="submit" value="Continue" onClick={completeAddress} />
                            }
                        </div>
                    </form>
                </div>
                <div id="options" className="form-section">
                    <form>
                        <h3>Task Options</h3>
                        <h1>How big is your task?</h1><br />
                        <input type="radio" name="size" /><label>Small - Est. half day</label>
                        <input type="radio" name="size" /><label>Medium - Est. 1 day</label>
                        <input type="radio" name="size" /><label>Large - Est. 2 days</label>
                        <h1>Requested Revisions</h1><br />
                        <input type="radio" name="interest" /><label>No revisions needed</label><br />
                        <input type="radio" name="interest" /><label>One round of revisions</label><br />
                        <input type="radio" name="interest" /><label>Two rounds of revisions</label><br />
                        <input type="submit" value="continue" />
                    </form>
                </div>
                <div id="options" className="form-section">
                    <form>
                        <h3>Details</h3>
                        <p>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</p><br />
                        <textarea></textarea>
                        <p>If you need two or more Artists, please post additional tasks for each Artists needed.</p>
                        <input onClick={ completePage } type="submit" value="See Artists" />
                    </form>
                </div>
            </div>
        </>
    )
}