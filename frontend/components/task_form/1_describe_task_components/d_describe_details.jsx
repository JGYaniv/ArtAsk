import React, { useState, useEffect } from 'react'

export default class Details extends React.Component{
    constructor(props){
        super(props)
        this.state = { details: "" }
        this.completeDetails = this.completeDetails.bind(this)
    }
    componentDidMount() {
        this.setState({
            details: this.props.state.describe.details,
        })
    }
    completeDetails(e) {
        e.preventDefault()
        if (this.state.street_address === "") {
            props.setLocalError("details", "Please add a few project details before continuing!")
        } else {
            this.props.handleChange("describe", "details")({ target: { value: this.state.details } })
            this.props.receiveDescribeForm(this.props.state)
            this.props.addCompletedFormSection("details")
            this.props.completePage()
        }
    }

    render(){
        return (
            <>
                <div id="details" className={`form-section ${this.props.assignCompleted("details")} ${this.props.assignFocused("details")}`} >
                    <div className="form-section-header" onClick={this.props.assignOnClick("details")}>
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
                        <div>
                            <input onClick={this.completeDetails} type="submit" value="See Artists" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}