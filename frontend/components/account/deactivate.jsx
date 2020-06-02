import React from 'react'
export default (props) => (
    <div className='deactive-account'>
        <h2>Account Deactivation</h2>
        <p>Once you click the deactivate button, your account will be immediately and irrevocably removed from existence (and possibly banished to the phantome zone).</p>
        <button onClick={() => props.deactivate(props.currentUser.id)}>Deactivate Account</button>
    </div>
)