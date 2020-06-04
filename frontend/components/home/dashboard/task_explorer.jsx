import React from 'react'
import {Link} from 'react-router-dom'

export default class BannerCta extends React.Component{
    constructor(props){
        super(props)
        this.state = { drop: false }
        this.clicker = this.clicker.bind(this)
        this.leave = this.leave.bind(this)
    }

    componentWillMount(){
        this.props.getTaskTypes();
    }

    clicker(e){
        this.setState({"drop": true})
    }

    leave(e){
        this.setState({"drop": false})
    }

    render(){
        const taskTypes = this.props.taskTypes.map((taskType, idx) => (
            <li key={idx}><Link to="/">{taskType.title}</Link></li>
        )).slice(1,5)
        return(
            <div className="explorer-background-image">
                <div className="explorer-dash">
                    <h1>Book Your Next Task</h1>
                    <form className="explorer-form">
                        <input className="dash-input" type="text" 
                            onFocus={this.clicker} 
                            onBlur={this.leave}
                            placeholder="What do you need help with?"/>
                        <div className="mag-glass">🔎</div>
                        <ul className={this.state.drop ? "reveal" : "hide"}>
                            {taskTypes}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}