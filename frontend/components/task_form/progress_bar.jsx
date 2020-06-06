import React from 'react'

export default (props) => {
    const activeSteps = ["", "", "", ""]
    if (props.step) { 
        for (let i=0; i<props.step; i++){
            activeSteps[i] = "active"
        }
    }
    const completedSteps = ["", "", "", ""]
    if (props.step) {
        for (let i = 0; i < props.step - 1; i++) {
            completedSteps[i] = "completed"
        }
    }

    return (
        <>
            <div className="progress-bar">
                <a href="/"><img src="https://i.imgur.com/sh8ARuh.png" className="logo" /></a>
                <div className={`form-step step-1 ${activeSteps[0]} ${completedSteps[0]}`}>
                    <p className="form-number step-1" onClick={() => props.setFormStep(1)}>{completedSteps[0] ? "✓" : 1}</p>
                    <div className="form-step-line right-line step-1"/>
                    <p className="step-description">Describe your project</p>
                </div>
                <div className={`form-step step-2 ${activeSteps[1]} ${completedSteps[1]}`}>
                    <div className="form-step-line left-line step-2"/>
                    <p className="form-number step-2" onClick={() => props.setFormStep(2)}>{completedSteps[1] ? "✓" : 2}</p>
                    <div className="form-step-line right-line step-2"/>
                    <p className="step-description">Browse artists</p>
                </div>
                <div className={`form-step step-3 ${activeSteps[2]} ${completedSteps[2]}`}>
                    <div className="form-step-line left-line step-3"/>
                    <p className="form-number step-3" onClick={() => props.setFormStep(3)}>{completedSteps[2] ? "✓" : 3}</p>
                    <div className="form-step-line right-line step-3"/>
                    <p className="step-description">Choose dates</p>
                </div>
                <div className={`form-step step-4 ${activeSteps[3]} ${completedSteps[3]}`}>
                    <div className="form-step-line left-line step-4"/>
                    <p className="form-number step-4" onClick={() => props.setFormStep(4)}>{completedSteps[3] ? "✓" : 4}</p>
                    <p className="step-description">Confirm</p>
                </div>
            </div>
        </>
    )
}