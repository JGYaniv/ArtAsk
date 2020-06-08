import React, { useState } from 'react'

export default ({ 
    errors,
    updateDescribeForm,
    setError,
    clearError,
    setFocus,
    completePage,
    taskForm
}) => {
    const [interest, setInterest] = useState(taskForm.describe.interest);
    const [completed, setComplete] = useState(!!taskForm.describe.interest)
    
    window.interest = interest
    window.completed = completed
    window.errors = errors
    window.storedState = JSON.parse(window.localStorage.getItem("task_form"))
    window.taskForm = taskForm

    const completeInterest = (e) => {
        e.preventDefault()
        if (interest === "") {
            setError("interest")
        } else {
            clearError("interest")
            setComplete("completed")
            setFocus("address")
            updateDescribeForm({interest: interest})
        }
        debugger
    }

    const focus= () => {
        setFocus("interest")
    }

    return (
        <div id="interest" 
            className={`form-section ${
                completed ? "completed" : ""
            } ${
                taskForm.focus_section === "interest" ? "focused" : ""
            }`} >

            <div className="form-section-header" onClick={focus}>
                <h3>TASK INTEREST</h3>
                <h4>tbd</h4>
            </div>
            <form className="interest-form">
                <h1>What brings you here today?</h1>
                <span>
                    <input
                        type="radio"
                        name="interest"
                        onChange={e => setInterest(e.target.value)}
                        value="ready"
                        checked={(interest === "ready") ? true : false} />
                    <label>I'm ready to book right now</label>
                </span>
                <span>
                    <input
                        type="radio"
                        name="interest"
                        onChange={e => setInterest(e.target.value)}
                        value="interested"
                        checked={(interest === "interested") ? true : false} />
                    <label>I'm interested in booking soon</label>
                </span>
                <span>
                    <input
                        type="radio"
                        name="interest"
                        onChange={e => setInterest(e.target.value)}
                        value="browsing"
                        checked={(interest === "browsing") ? true : false} />
                    <label>I'm just browsing</label>
                </span>
                <div>
                    <p className="inline-error">{errors.includes("interest") ? "Cannot leave blank!" : ""}</p>
                </div>
                <div>
                    <input type="submit" value={completed ? "Save" : "Continue"} onClick={completeInterest} /> :
                </div>
            </form>
        </div>
    )
}