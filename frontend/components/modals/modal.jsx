import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { postUser } from '../../actions/users_actions'
import { receiveFormStep } from '../../actions/task_form_actions'
import { login, clearSessionErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import Login from '../session/login';
import Signup from '../session/signup';
import SelectTime from '../task_form/select_time_modal';

const Modal = ({ modal, errors, closeModal, postUser, login, clearErrors, closeTimeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <Login 
                clearErrors={clearErrors} 
                closeModal={closeModal} 
                login={login} 
                errors={errors} />;
            break;
        case 'signup':
            component = <Signup 
                clearErrors={clearErrors} 
                closeModal={closeModal} 
                postUser={postUser} 
                errors={errors}  />;
            break;
        case 'selectTime':
            component = <SelectTime 
                clearErrors={clearErrors}
                closeModal={closeModal}
                errors={errors}  />
            break;
        default:
            return null;
    }

    return (
        <>
            <div className="modal-background" onClick={closeTimeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session,
        formStep: state.ui.task_form.form_step
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        closeTimeModal: () => { dispatch(closeModal()); }, //dispatch(receiveFormStep(2))
        postUser: user => dispatch(postUser(user)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);