import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { postUser } from '../../actions/users_actions'
import { login, clearSessionErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import Login from '../session/login';
import Signup from '../session/signup';

const Modal = ({ modal, errors, closeModal, postUser, login, clearErrors }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <Login clearErrors={clearErrors} 
                closeModal={closeModal} 
                login={login} 
                errors={errors} />;
            break;
        case 'signup':
            component = <Signup clearErrors={clearErrors} 
                closeModal={closeModal} 
                postUser={postUser} 
                errors={errors}  />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        postUser: user => dispatch(postUser(user)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);