import React, { useState } from 'react'
import { render } from 'react-dom';

export default class Describe extends React.Component{
    constructor(props){
        super(props)
        this.state = { street_address: "", apartment_number: "" }
        this.completeAddress = this.completeAddress.bind(this)
    }

    componentDidMount(){
        debugger
        this.setState({ 
            street_address: this.props.state.describe.street_address,
            apartment_number: this.props.state.describe.street_address
        })
    }

    completeAddress(e){
        e.preventDefault()
        if (this.state.street_address === "") {
            this.props.handleChange("describe", "street_address")({ target: { value: "remote" } })
        } else {
            // this.props.handleChange("describe", "street_address")({ target: { value: this.state.street_address }})
            // this.props.handleChange("describe", "apartment_number")({ target: { value: this.state.apartment_number }})
            // this.props.addCompletedFormSection("address")
            // this.props.setFocusSection("options")
            console.log("truckin")

        }
    }

    updateAddress(e){
        e.preventDefault()
        if (this.props.state.describe.street_address === "") {
            this.props.handleChange("describe", "street_address")({ target: { value: "remote" } })
        } else {
            // this.props.handleChange("describe", "street_address")({ target: { value: this.state.street_address } })
            // this.props.handleChange("describe", "apartment_number")({ target: { value: this.state.apartment_number } })
            // this.props.addCompletedFormSection("address")
            // this.props.setFocusSection("options")
            console.log("rockin")
        }
    }
    render(){
    return(
        <>
            <div id="address" className={`form-section ${this.props.assignCompleted("address")} ${this.props.assignFocused("address")}`}>
                <div className="form-section-header" onClick={this.props.assignOnClick("address")}>
                    <h3>TASK LOCATION</h3>
                    <h4>{this.props.state.describe.street_address}</h4>
                </div>
                <form className="address-form">
                    <h1>Leave blank if this is a remote project.</h1><br />
                    <input className="street-address"
                        type="text"
                        onChange={(e) => this.setState({ street_address: e.target.value })}
                        value={this.state.streetAddress} />
                    <input className="apartment-number"
                        type="text"
                        onChange={(e) => this.setState({apartment_number: e.target.value})}
                        value={this.state.apartmentNumber} />
                    <div>
                        {this.props.checkCompleted("address") ?
                            <input type="submit" value="Save" onClick={this.updateAddress} /> :
                            <input type="submit" value="Continue" onClick={this.completeAddress} />
                        }
                    </div>
                </form>
            </div>
        </>
    )}
}