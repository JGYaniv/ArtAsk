import React, { useState } from 'react'

export default ({
    errors,
    receiveDescribeForm,
    updateDescribeForm,
    completePage,
    setError,
    clearError,
    setFocus,
    taskForm
}) => {

    const [details, setDetails] = useState(taskForm.describe.details);
    const [completed, setComplete] = useState(!!taskForm.describe.details);

    const completeDetails = (e) => {
        e.preventDefault()
        if (details === "") {
            setError("details")
        } else {
            clearError("details")
            setComplete("completed")
            updateDescribeForm({ details: details })
        }
    }

    const focus = () => {
        setFocus("details")
    }

    const classString = `form-section ${
        completed ? "completed" : ""
    } ${
        taskForm.focus_section === "details" ? "focused" : ""
    }`


    return (
        <div id="details" 
            className={classString} >
            <div className="form-section-header" onClick={focus}>
                <h3>TASK DETAILS</h3>
                <h4>{this.props.state.describe.details}</h4>
            </div>
            <form className="options-form">
                <p>Start the conversation, describe your project. This helps us show you only interested and available artist volunteers for the job. Don't worry, you can edit this later.</p><br />
                <textarea
                    onChange={e => {
                        this.setState({ details: e.target.value })
                    }} value={this.state.details}>
                </textarea>
                <p>If you need two or more artists, please post additional asks for each artist needed.</p>
                <p className="inline-error">{errors.includes("details") ? "Cannot leave blank!" : ""}</p>
                <div>
                    <input onClick={this.completeDetails} type="submit" value="See Artists" />
                </div>
            </form>
        </div>
    )
}