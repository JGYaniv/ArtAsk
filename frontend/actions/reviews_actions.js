export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"

export const receiveReviews = res => {
    return({
        type: RECEIVE_REVIEWS,
        ...res
})}