import { csrfFetch } from "./csrf";
import { RECEIVE_TRAIL } from "./trailsReducer";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const addReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: RECEIVE_REVIEW,
            review: data
        })
    } else {
        // TODO: handle error
    }
}

export const editReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'PATCH',
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: RECEIVE_REVIEW,
            review: data
        })
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'DELETE',
        body: JSON.stringify(reviewId)
    })

    if (response.ok) {
        dispatch({
            type: REMOVE_REVIEW,
            reviewId: reviewId
        })
    } else {
        // TODO: handle error
    }
}

const reviewReducer = (state = {}, action) => {
    let newState = { ...state }
    switch(action.type) {
        case RECEIVE_REVIEW:
            newState = {...state, ...action.review}
            return newState
        case RECEIVE_TRAIL:
            newState = {...state, ...action.trail.reviews}
            return newState;
        case REMOVE_REVIEW: 
            delete newState.trail.reviews[action.reviewId]
        default: 
            return newState;
    }
}

export default reviewReducer;