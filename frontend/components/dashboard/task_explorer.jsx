import React from 'react'
import {Link} from 'react-router-dom'
import FeaturedArtists from '../featured_artists/featured_artists'

export default class BannerCta extends React.Component{
    constructor(props){
        super(props)
        this.state = { drop: false, search: "" }
        this.clicker = this.clicker.bind(this)
        this.leave = this.leave.bind(this)
        this.timeout = null
    }

    componentWillMount(){
        this.props.getTaskTypes();
        this.props.getUsers();
    }

    clicker(e){
        this.setState({"drop": true})
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    leave(e) {
        this.timeout = setTimeout(() => this.setState({ "drop": false }), 200)
    }

    selectTask(taskType) {
        return (e) => {
            e.preventDefault()
            this.props.clearTaskForm();
            this.props.selectTaskType(taskType);
            this.props.history.push("/form")
        }
    }


    render(){
        let filteredTaskTypes = this.props.taskTypesArr;

        if (this.state.search.length > 0){
            let regex = RegExp(`${this.state.search.toLowerCase()}`)
            filteredTaskTypes = this.props.taskTypesArr.filter((taskType) => {
                if (regex.test(taskType.title.toLowerCase())){
                    return taskType
                // } else if (regex.test(taskType.description.toLowerCase())){
                //     return taskType
                }
            })
        }

        const taskTypes = filteredTaskTypes.map((taskType, idx) => {
            return <li key={idx}><Link to="/form" onClick={this.selectTask(taskType)}>{taskType.title}</Link></li>
        })
        
        return(
            <>
                <div className="explorer-background-image">
                    <div className="explorer-dash">
                        <h1>Book Your Next Task</h1>
                        <form className="explorer-form" onBlur={this.leave} onFocus={this.clicker}>
                            <input className="dash-input" type="text" 
                                placeholder="What do you need help with?"
                                onChange={e => this.setState({search: e.target.value})}/>
                            <div className="mag-glass">🔎</div>
                            <ul  className={this.state.drop ? "reveal" : "hide"}>
                                {taskTypes.length > 0 ? taskTypes : (
                                    <li key="w@">
                                        <a href="#" onClick={e => e.preventDefault()}>☠️ no results, please try again ☠️</a>
                                    </li>
                                )}
                            </ul>
                        </form>
                    </div>
                </div>
                <FeaturedArtists artists={this.props.artists} taskTypes={this.props.taskTypes} />
            </>
        )
    }
}