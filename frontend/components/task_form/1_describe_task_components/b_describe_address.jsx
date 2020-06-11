import React, { useState } from 'react'

export default ({
    updateDescribeForm,
    setFocus,
    taskForm
}) => {
    const [streetAddress, setStreetAddress] = useState(taskForm.describe.street_address);
    const [apartmentNumber, setApartmentNumber] = useState(taskForm.describe.apartment_number);
    const [completed, setComplete] = useState(!!taskForm.describe.street_address);

    const completeAddress = (e) => {
        e.preventDefault()
        setComplete(true)
        setFocus("options")
        // let address = (`${streetAddress}, ${apartmentNumber}`)
        let address = streetAddress ? streetAddress : "remote"
        updateDescribeForm({ 
            street_address: address, 
            apartment_number: apartmentNumber 
        })
    }

    const focus = () => {
        if (completed){
            setFocus("address")
        }
    }

    const classString = `form-section ${
            completed ? "completed" : ""
        } ${
            taskForm.focus_section === "address" ? "focused" : ""
        }`

    return(
        <div id="address" 
            className={classString}>

            <div className="form-section-header" onClick={focus}>
                <h3>TASK LOCATION</h3>
                <h4>📍 Your location is {taskForm.describe.street_address}</h4>
            </div>
            <form className="address-form">
                <h2>*Leave blank if this is a remote project.</h2><br />

                <input className="street-address"
                    placeholder="Enter street address..."
                    type="text"
                    onChange={e => setStreetAddress(e.target.value)}
                    value={streetAddress} />
                <input className="apartment-number"
                    placeholder="Unit or Apt #"
                    type="text"
                    onChange={e => setApartmentNumber(e.target.value)}
                    value={apartmentNumber} />

                <div className="form-button-section">
                    <input 
                        type="submit" 
                        value={completed ? "Save" : "Continue"} 
                        onClick={completeAddress} />
                </div>
            </form>
        </div>
    )
}