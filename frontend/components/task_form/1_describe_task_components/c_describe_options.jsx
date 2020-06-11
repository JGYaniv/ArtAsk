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
        }

        if (
            (revisions.length > 0) &&
                (size.length > 0) 
        ) {
            setComplete("completed")
            setFocus("details")
        }


        updateDescribeForm({ 
            revisions: revisions, 
            size: size 
        })
        
    }

    const focus = () => {
        if (completed){
            setFocus("options")
        }
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
                    <h4>📊 Your project size is {size}, with {revisions} revisions</h4>
                    <h4></h4>
                </div>
                <form className="options-form">

                    <h1>How big is your task?</h1><br />
                    <span>
                        <label>
                            <input 
                                type="radio" 
                                name="size"
                                onChange={e => setSize(e.target.value)}
                                value="small"
                                checked={(size === "small") ? true : false} />
                            Small - Est. half day</label>
                        <label>
                            <input 
                                type="radio" 
                                name="size"
                                onChange={e => setSize(e.target.value)}
                                value="medium"
                                checked={(size === "medium") ? true : false} />
                            Medium - Est. 1 day</label>
                        <label>
                            <input 
                                type="radio" 
                                name="size"
                                onChange={e => setSize(e.target.value)}
                                value="large"
                                checked={(size === "large") ? true : false} />
                        Large - Est. 2 days</label>
                    </span>

                    <p className="inline-error">
                        {errors.includes("size") ? "Cannot leave blank!" : ""}
                    </p>
                    <div className="options-list">
                        <h1>Requested Revisions</h1><br />
                        <label>
                            <input 
                                type="radio" 
                                name="revisions"
                                onChange={e => setRevisions(e.target.value)}
                                value="zero"
                                checked={(revisions === "zero") ? true : false} />
                        No revisions needed</label><br />
                        <label>
                            <input 
                                type="radio" 
                                name="revisions"
                                onChange={e => setRevisions(e.target.value)}
                                value="one"
                                checked={(revisions === "one") ? true : false} />
                        One round of revisions</label><br />
                        <label>
                            <input 
                                type="radio" 
                                name="revisions"
                                onChange={e => setRevisions(e.target.value)}
                                value="two"
                                checked={(revisions === "two") ? true : false} />
                        Two rounds of revisions</label><br />
                    </div>
                    <p className="inline-error">
                        {errors.includes("revisions") ? "Cannot leave blank!" : ""}
                    </p>

                    <div className="form-button-section">
                        <input
                            type="submit"
                            value={completed ? "Save" : "Continue"}
                            onClick={completeAddress} />
                    </div>
                </form>
            </div>
        </>
    )
}