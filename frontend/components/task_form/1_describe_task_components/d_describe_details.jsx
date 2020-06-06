import React, { useState, useEffect } from 'react'

export default (props) => {
    const [details, setDetails] = useState("");
    useEffect(() => {
        if (details === ""){
            setDetails(props.state.describe.details)
        }
    })
    const update = props.handleChange("describe", "details")
    const completeDetails = props.complete(["details"], "details", "")
    const completePage = (e) => {
        completeDetails(e)
        props.completePage()
    }

    return (
        <>
            <div id="details" className={`form-section ${props.assignCompleted("details")} ${props.assignFocused("details")}`} >
                <div className="form-section-header" onClick={props.assignOnClick("details")}>
                    <h3>TASK DETAILS</h3>
                    <h4>{props.state.describe.details}</h4>
                </div>
                <form className="options-form">
                    <p>Start the conversation, describe your project. This helps us show you only interested and available artist volunteers for the job. Don't worry, you can edit this later.</p><br />
                    <textarea
                        onChange={e =>{
                            setDetails(e.target.value)
                            }} value={details}>
                        </textarea>
                    <p>If you need two or more artists, please post additional asks for each artist needed.</p>
                    <div>
                        <input onClick={
                            (e) => {
                                update({ target: { value: details } });
                                completePage(e)
                            }
                        } type="submit" value="See Artists" />
                    </div>
                </form>
            </div>
        </>
    )
}