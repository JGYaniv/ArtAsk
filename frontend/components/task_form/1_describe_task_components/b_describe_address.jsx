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
        setComplete("completed")
        setFocus("options")
        // let address = (`${streetAddress}, ${apartmentNumber}`)
        updateDescribeForm({ 
            street_address: streetAddress, 
            apartment_number: apartmentNumber 
        })
    }

    const focus = () => {
        setFocus("address")
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
                <h4>{taskForm.describe.street_address}</h4>
            </div>
            <form className="address-form">
                <h1>Leave blank if this is a remote project.</h1><br />

                <input className="street-address"
                    type="text"
                    onChange={e => setStreetAddress(e.target.value)}
                    value={streetAddress} />
                <input className="apartment-number"
                    type="text"
                    onChange={e => setApartmentNumber(e.target.value)}
                    value={apartmentNumber} />

                <input 
                    type="submit" 
                    value={completed ? "Save" : "Continue"} 
                    onClick={completeAddress} />
            </form>
        </div>
    )
}