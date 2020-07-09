import React from 'react'
export default (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.currentUser.email === "bob@tablo.co") {
            alert("Cannot edit demo account Mr. Tables!")
        } else {
            props.deactivate(props.currentUser.id)
        }
    }

    return (
        <div className='deactive-account'>
            <h2>Account Deactivation</h2>
            <p>Once you click the deactivate button, your account will be immediately and irrevocably removed from existence (and possibly banished to the phantom zone).</p>
            <button onClick={handleSubmit}>Deactivate Account</button>
        </div>
    )
}