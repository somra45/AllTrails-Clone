import { csrfFetch } from "./csrf";

export const ADD_REVIEW = 'reviews/ADD_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const addReview = () => async dispatch => {
    const response = await csrfFetch('api/reviews')
}

const reviewReducer = (state = {}, action) => {
    let newState = { ...state }
    switch(action.type) {
        default: 
            return newState
    }
}

export default reviewReducer;