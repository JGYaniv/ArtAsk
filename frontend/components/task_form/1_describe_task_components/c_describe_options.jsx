import React, { useState } from 'react'

export default (props) => {
    const complete = props.complete(["size", "revisions"], "options", "details")

    return (
        <>
            <div id="options" className={`form-section ${props.assignCompleted("options")} ${props.assignFocused("options")}`} >
                <div className="form-section-header" onClick={props.assignOnClick("options")}>
                    <h3>TASK OPTIONS</h3>
                    <h4>{props.state.describe.size}</h4>
                    <h4>{props.state.describe.revisions}</h4>
                </div>
                <form className="options-form">
                    <h1>How big is your task?</h1><br />
                    <input 
                        type="radio" 
                        name="size"
                        onChange={props.handleChange("describe", "size")}
                        value="small"
                        checked={(props.state.describe.size === "small") ? true : false} />
                    <label>Small - Est. half day</label>
                    <input 
                        type="radio" 
                        name="size"
                        onChange={props.handleChange("describe", "size")}
                        value="medium"
                        checked={(props.state.describe.size === "medium") ? true : false} />
                    <label>Medium - Est. 1 day</label>
                    <input 
                        type="radio" 
                        name="size"
                        onChange={props.handleChange("describe", "size")}
                        value="large"
                        checked={(props.state.describe.size === "large") ? true : false} />
                    <label>Large - Est. 2 days</label>
                    <p className="inline-error sub-error">{props.state.localErrors.size}</p>
                    <h1>Requested Revisions</h1><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={props.handleChange("describe", "revisions")}
                        value="none"
                        checked={(props.state.describe.revisions === "none") ? true : false} />
                    <label>No revisions needed</label><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={props.handleChange("describe", "revisions")}
                        value="one"
                        checked={(props.state.describe.revisions === "one") ? true : false} />
                    <label>One round of revisions</label><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={props.handleChange("describe", "revisions")}
                        value="two"
                        checked={(props.state.describe.revisions === "two") ? true : false} />
                    <label>Two rounds of revisions</label><br />
                    <p className="inline-error sub-error">{props.state.localErrors.revisions}</p>
                    <div>
                        {props.checkCompleted("options") ?
                            <input type="submit" value="Save" onClick={complete} /> :
                            <input type="submit" value="Continue" onClick={complete} />
                        }
                    </div>
                </form>
            </div>
        </>
    )
}