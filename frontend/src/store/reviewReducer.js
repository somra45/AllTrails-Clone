import { csrfFetch } from "./csrf";
import { RECEIVE_TRAIL } from "./trailsReducer";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const addReview = (trailId) => async dispatch => {
    const response = await csrfFetch('api/reviews', {
        method: 'POST'
    })

    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: RECEIVE_REVIEW,
            action: data
        })
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
        default: 
            return newState;
    }
}

export default reviewReducer;