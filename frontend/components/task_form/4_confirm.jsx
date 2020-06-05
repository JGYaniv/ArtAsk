import React from 'react'

export default (props) => {
    return (<>
        <h1>confirmin</h1>
        <p>{props.state.form_step}</p>
        <button onClick={() => { props.setFormStep(1) }}>yolo</button>
    </>)
}