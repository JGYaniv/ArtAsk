import React, { useState } from 'react'

export default ({ 
    errors,
    updateDescribeForm,
    setError,
    clearError,
    setFocus,
    taskForm
}) => {
    const [interest, setInterest] = useState(taskForm.describe.interest);
    const [completed, setComplete] = useState(!!taskForm.describe.interest);

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
    }

    const focus= () => {
        if (completed) {
            setFocus("interest")
        }
    }

    const classString = `form-section ${
            completed ? "completed" : ""
        } ${
            taskForm.focus_section === "interest" ? "focused" : ""
        }`

    return (
        <div id="interest" 
            className={classString} >
                
            <div className="form-section-header" onClick={focus}>
                <h3>TASK INTEREST</h3>
                <h4>📋 You're {interest}</h4>
            </div>
            
            <form className="interest-form">
                <h1>What brings you here today?</h1>

                <span>
                    <label>
                        <input
                            type="radio"
                            name="interest"
                            onChange={e => setInterest(e.target.value)}
                            value="ready"
                            checked={(interest === "ready") ? true : false} />
                    I'm ready to book right now</label>
                </span>
                <span>
                    <label>
                        <input
                            type="radio"
                            name="interest"
                            onChange={e => setInterest(e.target.value)}
                            value="interested"
                            checked={(interest === "interested") ? true : false} />
                    I'm interested in booking soon</label>
                </span>
                <span>
                    <label>
                        <input
                            type="radio"
                            name="interest"
                            onChange={e => setInterest(e.target.value)}
                            value="browsing"
                            checked={(interest === "browsing") ? true : false} />
                    I'm just browsing</label>
                </span>

                <div>
                    <p className="inline-error">
                        {errors.includes("interest") ? "Cannot leave blank!" : ""}
                    </p>
                </div>

                <div className="form-button-section">
                    <input 
                        type="submit" 
                        value={completed ? "Save" : "Continue"} 
                        onClick={completeInterest} />
                </div>
            </form>
        </div>
    )
}