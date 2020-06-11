import React from 'react'
import {Link} from 'react-router-dom'

export default class BannerCta extends React.Component{
    constructor(props){
        super(props)
        this.state = { drop: false, search: "" }
        this.clicker = this.clicker.bind(this)
        this.leave = this.leave.bind(this)
        this.timeout = null
    }

    selectTask(taskType){
        return (e) => {
            this.props.selectTaskType(taskType);
        }
    }

    componentDidMount(){
        this.props.getTaskTypes();
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    clicker(e){
        this.setState({"drop": true})
    }

    leave(e){
        this.timeout = setTimeout(() => this.setState({ "drop": false }), 200) 
    }

    render(){
        let filteredTaskTypes = this.props.taskTypes;

        if (this.state.search.length > 0) {
            let regex = RegExp(`${this.state.search.toLowerCase()}`)
            filteredTaskTypes = this.props.taskTypes.filter((taskType) => {
                if (regex.test(taskType.title.toLowerCase())) {
                    return taskType
                    // } else if (regex.test(taskType.description.toLowerCase())){
                    //     return taskType
                }
            })
        }

        const taskTypes = filteredTaskTypes.map((taskType, idx) => {
            return (
                <li key={idx}>
                    <Link to="/form" onClick={this.selectTask(taskType)}>{taskType.title}</Link>
                </li>
            )
        })

        return(
            <div className="bannerImage">
                <div className="banner-cta">
                    <div className="explorer-cta">
                        <h1>Artists volunteering their craft to build a better world</h1>
                        <p>Our artist volunteers are mobilized and motivated to help you change the world. Lets work together!</p>
                        <form className="explorer-form" 
                            onFocus={this.clicker}
                            onBlur={this.leave} > 
                            <span>
                                <input 
                                    type="text" 
                                    placeholder="What do you need help with?"
                                    onChange={e => this.setState({ search: e.target.value })}/>
                                <div className="mag-glass">🔎</div>
                                <input type="submit" value="Find a volunteer" />
                            </span>
                            <ul className={this.state.drop ? "reveal" : "hide"}>
                                {taskTypes.length > 0 ? taskTypes : (
                                    <li key="w@">
                                        <a href="#" onClick={e => e.preventDefault()}>☠️ no results, please try again ☠️</a>
                                    </li>
                                )}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}