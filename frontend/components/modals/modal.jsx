import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { postUser } from '../../actions/users_actions'
import { receiveFormStep, receiveTimeForm } from '../../actions/task_form_actions'
import { login, clearSessionErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import Login from './login_modal';
import Signup from './signup_modal';
import SelectTime from './select_time_modal';

const Modal = ({ 
    modal, 
    errors, 
    closeModal, 
    openModal, 
    postUser, 
    login, 
    clearErrors, 
    closeFormModal, 
    setTimeForm, 
    setFormStep,
    users,
    taskForm
}) => {
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
                openModal={openModal} 
                postUser={postUser} 
                login={login} 
                errors={errors}  />;
            break;
        case 'selectTime':
            component = <SelectTime 
                clearErrors={clearErrors}
                closeModal={closeFormModal}
                errors={errors}  
                setTimeForm={setTimeForm}
                setFormStep={setFormStep}
                users={users}
                taskForm={taskForm}/>
            break;
        default:
            return null;
    }

    return (
        <>
            <div className="modal-background" onClick={closeFormModal}>
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
        taskForm: state.ui.task_form,
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        closeFormModal: () => { 
            dispatch(closeModal());
            dispatch(receiveFormStep(2));
        },
        postUser: user => dispatch(postUser(user)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
        setTimeForm: (time) => dispatch(receiveTimeForm(time)),
        setFormStep: (step) => dispatch(receiveFormStep(step)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);