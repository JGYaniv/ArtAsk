import React from 'react'

export default (props) => {
    return (<>
        <h1>timin</h1>
        <p>{props.state.form_step}</p>
        <button onClick={() => { props.setFormStep(4) }}>yolo</button>
    </>)
}