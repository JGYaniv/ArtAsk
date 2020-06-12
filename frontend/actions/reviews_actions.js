export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const TASK_TO_REVIEW_FORM = "TASK_TO_REVIEW_FORM"
import { closeModal } from './modal_actions'
import * as reviewsApiUtil from '../utils/reviews_api_utils'

export const receiveReviews = res => {
    return ({
        type: RECEIVE_REVIEWS,
        ...res
    })
}

export const taskToReviewForm = task => {
    return ({
        type: TASK_TO_REVIEW_FORM,
        task
    })
}

export const postReview = review => dispatch => (
    reviewsApiUtil.postReview(review)
        .then(() => dispatch(closeModal()))
)
