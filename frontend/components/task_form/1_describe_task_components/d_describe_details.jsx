import React, { useState } from 'react'

export default (props) => {
    const [details, setDetails] = useState("");

    return (
        <>
            <div id="options" className="form-section">
                <form>
                    <h3>Details</h3>
                    <p>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</p><br />
                    <textarea></textarea>
                    <p>If you need two or more Artists, please post additional tasks for each Artists needed.</p>
                    <input onClick={props.completePage} type="submit" value="See Artists" />
                </form>
            </div>
        </>
    )
}