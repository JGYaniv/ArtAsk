import React, { useState } from 'react'

export default (props) => {
    const [interest, setInterest] = useState("");

    return (
        <>
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
        </>
    )
}