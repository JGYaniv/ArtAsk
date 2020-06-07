import React from 'react'

export default class SelectTime extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.openModal('selectTime')
    }

    componentWillUnmount(){
        this.props.closeModal()
    }

    render(){
        return (
            <div>
                <h1>timin</h1>
                <h2>timin</h2>
                <h3>timin</h3>
                <h4>timin</h4>
                <h5>timin</h5>
                <h6>timin</h6>
            </div>
        )
    }
}