import { connect } from 'react-redux'
import BannerCta from './banner_cta'
import {getTaskTypes} from '../../../actions/task_types_actions'

const mapStateToProps = state => ({
    taskTypes: Object.values(state.entities.taskTypes)
})

const mapDispatchToProps = dispatch => ({
    getTaskTypes: () => dispatch(getTaskTypes())
})

export default connect(mapStateToProps, mapDispatchToProps)(BannerCta)