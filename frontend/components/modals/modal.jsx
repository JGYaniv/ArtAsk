import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { postUser } from '../../actions/users_actions'
import { postReview } from '../../actions/reviews_actions'
import { receiveFormStep, receiveTimeForm } from '../../actions/task_form_actions'
import { login, clearSessionErrors } from '../../actions/session_actions'
import { connect } from 'react-redux';
import Login from './login_modal';
import Signup from './signup_modal';
import SelectTime from './select_time_modal';
import Review from './review_modal';

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
    tasks,
    taskForm,
    postReview,
    reviewTaskId,
    reviewTask,
    reviewArtist,
    currentUser
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
        case 'reviewTask':
            component = <Review 
                closeModal={closeModal}
                errors={errors}
                clearErrors={clearErrors}
                postReview={postReview}
                reviewTaskId={reviewTaskId}
                reviewTask={reviewTask}
                reviewArtist={reviewArtist}
                users={users}
                tasks={tasks}
                currentUser={currentUser} />
            break;
        default:
            return null;
    }
    const modalClass = modal === "reviewTask" ? "review modal-background" : "modal-background"
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
    let reviewTask = state.ui.review_form ? state.entities.tasks[state.ui.review_form.id] : undefined;
    return {
        modal: state.ui.modal,
        errors: state.errors.session,
        taskForm: state.ui.task_form,
        users: state.entities.users,
        tasks: state.entities.tasks,
        reviewTaskId: state.ui.review_form.id,
        currentUser: state.session.currentUser,
        reviewTask: reviewTask,
        reviewArtist: reviewTask ? state.entities.users[reviewTask.artist_id] : "",
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
        postReview: review => dispatch(postReview(review)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
        setTimeForm: (time) => dispatch(receiveTimeForm(time)),
        setFormStep: (step) => dispatch(receiveFormStep(step)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);