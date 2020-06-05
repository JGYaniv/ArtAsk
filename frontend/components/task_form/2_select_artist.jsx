import React from 'react'

export default (props) => {
    return (<>
        <h1>selectin</h1>
        <p>{props.state.form_step}</p>
        <button onClick={() => { props.setFormStep(3) }}>yolo</button>
    </>)
}