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
            <>
            </>
        )
    }
}