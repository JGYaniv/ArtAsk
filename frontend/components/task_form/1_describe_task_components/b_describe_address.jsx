import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

export default ({
    updateDescribeForm,
    setFocus,
    taskForm,
    errors,
    setError
}) => {
    const [streetAddress, setStreetAddress] = useState(taskForm.describe.street_address);
    const [apartmentNumber, setApartmentNumber] = useState(taskForm.describe.apartment_number);
    const [completed, setComplete] = useState(!!taskForm.describe.street_address);

    const completeAddress = (e) => {
        e.preventDefault()
        if (streetAddress === "") {
            setError("address")
        } else {
            setComplete(true)
            setFocus("options")
            updateDescribeForm({ 
                street_address: streetAddress, 
                apartment_number: apartmentNumber 
            })
        }
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

    const handleChange = address => setStreetAddress(address)

    const inputProps = {
        value: streetAddress,
        onChange: handleChange
    }

    const googlePlacesClasses = {
        root: 'address-search-bar',
        autocompleteContainer: 'address-dropdown',
        autocompleteItem: 'dropdown-item',
        autocompleteItemActive: 'active'
    }

    return(
        <div id="address" 
            className={classString}>

            <div className="form-section-header" onClick={focus}>
                <h3>TASK LOCATION</h3>
                <h4>📍 Your location is {taskForm.describe.street_address}</h4>
            </div>
            <form className="address-form">
                {window.google ? (<PlacesAutocomplete inputProps={inputProps} classNames={googlePlacesClasses} />) : ""}

                <input className="apartment-number"
                    placeholder="Unit or Apt #"
                    type="text"
                    onChange={e => setApartmentNumber(e.target.value)}
                    value={apartmentNumber} />

                <div>
                    <p className="inline-error">
                        {errors.includes("address") ? "Cannot leave blank!" : ""}
                    </p>
                </div>
                
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