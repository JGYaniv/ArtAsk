import React, { useState } from 'react'

export default ({
    updateDescribeForm,
    setFocus,
    taskForm,
    errors,
    setError,
    clearError
}) => {
    const [size, setSize] = useState(taskForm.describe.size);
    const [revisions, setRevisions] = useState(taskForm.describe.revisions);
    const [completed, setComplete] = useState(!!revisions && !!size);

    const completeAddress = (e) => {
        e.preventDefault()
        if (size === "") {
            setError("size")
        } else { 
            clearError("size") 
        }
        
        if (revisions === "") {
            setError("revisions")
        } else { 
            clearError("revisions") 
            setComplete("completed")
            setFocus("details")
            updateDescribeForm({ 
                revisions: revisions, 
                size: size 
            })
        }
        
    }

    const focus = () => {
        setFocus("options")
    }

    const classString = `form-section ${
        completed ? "completed" : ""
    } ${
        taskForm.focus_section === "options" ? "focused" : ""
    }`


    return (
        <>
            <div id="options" 
                className={classString} >
                    
                <div className="form-section-header" onClick={focus}>
                    <h3>TASK OPTIONS</h3>
                    <h4>{size}</h4>
                    <h4>{revisions}</h4>
                </div>
                <form className="options-form">

                    <h1>How big is your task?</h1><br />
                    <input 
                        type="radio" 
                        name="size"
                        onChange={e => setSize(e.target.value)}
                        value="small"
                        checked={(size === "small") ? true : false} />
                    <label>Small - Est. half day</label>
                    <input 
                        type="radio" 
                        name="size"
                        onChange={e => setSize(e.target.value)}
                        value="medium"
                        checked={(size === "medium") ? true : false} />
                    <label>Medium - Est. 1 day</label>
                    <input 
                        type="radio" 
                        name="size"
                        onChange={e => setSize(e.target.value)}
                        value="large"
                        checked={(size === "large") ? true : false} />
                    <label>Large - Est. 2 days</label>

                    <p className="inline-error">
                        {errors.includes("size") ? "Cannot leave blank!" : ""}
                    </p>

                    <h1>Requested Revisions</h1><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={e => setRevisions(e.target.value)}
                        value="none"
                        checked={(revisions === "none") ? true : false} />
                    <label>No revisions needed</label><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={e => setRevisions(e.target.value)}
                        value="one"
                        checked={(revisions === "one") ? true : false} />
                    <label>One round of revisions</label><br />
                    <input 
                        type="radio" 
                        name="revisions"
                        onChange={e => setRevisions(e.target.value)}
                        value="two"
                        checked={(revisions === "two") ? true : false} />
                    <label>Two rounds of revisions</label><br />
                    
                    <p className="inline-error">
                        {errors.includes("revisions") ? "Cannot leave blank!" : ""}
                    </p>

                    
                    <input
                        type="submit"
                        value={completed ? "Save" : "Continue"}
                        onClick={completeAddress} />
                </form>
            </div>
        </>
    )
}