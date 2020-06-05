import React from 'react'

export default (props) => {
    const activeSection = 0
    const completePage = () => {
        if (props.errors.length === 0){
            props.setFormStep(2)
        }
    }
    return (
        <>
            <div className="form-banner">
                <p>Tell us about your project! We use these details to show Taskers who fit your needs.</p>
            </div>
            <div className="form-page">
                <h1>{ props.taskType.title || "pick a task yo" }</h1>
                <div id="interest" className="form-section">
                    <form>
                        <h3>TASK INTEREST</h3>
                        <h1>What brings you here today?</h1>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange} 
                                value="ready" 
                                checked={ (props.state.interest === "ready") ? true : false}/>
                            <label>I'm ready to book right now</label>
                        </span>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange} 
                                value="interested" 
                                checked={(props.state.interest === "interested") ? true : false} />
                            <label>I'm interested in booking soon</label>
                        </span>
                        <span>
                            <input 
                                type="radio" 
                                name="interest" 
                                onChange={props.handleChange} 
                                value="browsing" 
                                checked={(props.state.interest === "browsing") ? true : false} />
                            <label>I'm just browsing</label>
                        </span>
                        <div>
                            <input 
                                type="submit" 
                                value="Continue" 
                                handleSave={props.handleSave("interest")}/>
                        </div>
                    </form>
                </div>
                <div id="address" className="form-section">
                    <form>
                        <h3>ADDRESS (OPTIONAL)</h3>
                        <h1>What brings you here today?</h1><br />
                        <input className="address" type="text" />
                        <input type="text" />
                        <input type="submit" value="continue" />
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
                        <h3>Task Options</h3>
                        <h1>How big is your task?</h1><br />
                        <input type="radio" name="size" /><label>Small - Est. half day</label>
                        <input type="radio" name="size" /><label>Medium - Est. 1 day</label>
                        <input type="radio" name="size" /><label>Large - Est. 2 days</label>
                        <h1>Requested Revisions</h1><br />
                        <input type="radio" name="interest" /><label>No revisions needed</label><br />
                        <input type="radio" name="interest" /><label>One round of revisions</label><br />
                        <input type="radio" name="interest" /><label>Two rounds of revisions</label><br />
                        <input onClick={ completePage } type="submit" value="See Artists" />
                    </form>
                </div>
            </div>
        </>
    )
}