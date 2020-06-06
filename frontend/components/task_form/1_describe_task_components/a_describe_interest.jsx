import React, { useState } from 'react'

export default (props) => {
    const [interest, setInterest] = useState("");

    const completeInterest = (e) => {
        e.preventDefault()
        if (props.state.describe.interest === "") {
            props.setLocalError("interest", "Please select an option before continuing!")
        } else {
            props.setLocalError("interest", "")
            props.addCompletedFormSection("interest")
            props.setFocusSection("address")
        }
    }

    const updateInterest = (e) => {
        e.preventDefault()
        if (props.state.describe.interest === "") {
            props.setLocalError("interest", "Please select an option before continuing!")
        } else {
            props.setLocalError("interest", "")
            props.addCompletedFormSection("interest")
            props.setFocusSection("address")
        }
    }
    return (
        <>
            <div id="interest" className={`form-section ${props.assignCompleted("interest")} ${props.assignFocused("interest")}`} >
                <div className="form-section-header" onClick={props.assignOnClick("interest")}>
                    <h3>TASK INTEREST</h3>
                    <h4>{props.state.describe.interest}</h4>
                </div>
                <form className="interest-form">
                    <h1>What brings you here today?</h1>
                    <span>
                        <input
                            type="radio"
                            name="interest"
                            onChange={props.handleChange("describe", "interest")}
                            value="ready"
                            checked={(props.state.describe.interest === "ready") ? true : false} />
                        <label>I'm ready to book right now</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="interest"
                            onChange={props.handleChange("describe", "interest")}
                            value="interested"
                            checked={(props.state.describe.interest === "interested") ? true : false} />
                        <label>I'm interested in booking soon</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="interest"
                            onChange={props.handleChange("describe", "interest")}
                            value="browsing"
                            checked={(props.state.describe.interest === "browsing") ? true : false} />
                        <label>I'm just browsing</label>
                    </span>
                    <div>
                        <p className="inline-error">{props.state.localErrors.interest}</p>
                    </div>
                    <div>
                        {props.checkCompleted("interest") ?
                            <input type="submit" value="Save" onClick={updateInterest} /> :
                            <input type="submit" value="Continue" onClick={completeInterest} />
                        }
                    </div>
                </form>
            </div>
        </>
    )
}