export const postReview = (review) => {
    return $.ajax({
        url: `/api/reviews`,
        method: 'post',
        data: { review: review }
    })
}
