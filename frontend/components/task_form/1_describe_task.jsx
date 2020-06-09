import React, { useEffect } from 'react'
import Interest from './1_describe_task_components/a_describe_interest'
import Address from './1_describe_task_components/b_describe_address'
import Options from './1_describe_task_components/c_describe_options'
import Details from './1_describe_task_components/d_describe_details'

export default ({
    taskForm,
    taskType,
    errors,
    setDescribeForm,
    updateDescribeForm,
    setFormStep,
    setFocus,
    setError,
    clearError
}) => {

    const sectionProps = {
        taskForm: taskForm,
        errors: errors,
        setDescribeForm: setDescribeForm,
        updateDescribeForm: updateDescribeForm,
        setError: setError,
        clearError: clearError,
        setFocus: setFocus,
        setFormStep: setFormStep
    }

    return (
        <>
            <div className="form-banner">
                <p>Tell us about your project! We use these details to show Artist volunteers who fit your needs.</p>
            </div>
            <div className="form-page">
            <div className="task-title"><h1>{(taskType ? taskType.title : "")}</h1></div>
                <Interest {...sectionProps} />
                <Address {...sectionProps} />
                <Options {...sectionProps} />
                <Details {...sectionProps} />
            </div>
        </>
    )
}