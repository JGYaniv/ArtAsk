import React from 'react'
import { getTaskTypes } from '../../../utils/task_types_api_utils'
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
            <div className="bannerImage">
                <div className="banner-cta">
                    <div className="explorer-cta">
                        <h1>Artists volunteering their craft to build a better world</h1>
                        <p>Our artist volunteers are mobilized and motivated to help you change the world. Lets work together!</p>
                        <form>
                            <input type="text" onFocus={this.clicker} onBlur={this.leave}/>
                            <ul className={this.state.drop ? "reveal" : "hide"}>
                                {taskTypes}
                            </ul>
                            <input type="submit" value="Find a volunteer" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// const handleClick = () => alert("feature coming soon!")

// () => (
//     <div className="bannerImage">
//         <div className="banner-cta">
//             <h1>Artists volunteering their craft to build a better world</h1>
//             <p>Our artist volunteers are mobilized and motivated to help you change the world. Lets work together!</p>
//             <div className="explorer-cta">
//                 <form>
//                     <input type="text" />
//                     <input type="submit" value="Find a volunteer"/>
//                 </form>
//             </div>
//         </div>
//     </div>
// )