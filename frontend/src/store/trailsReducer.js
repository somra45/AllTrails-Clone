import { csrfFetch } from "./csrf";

export const RECEIVE_TRAILS = 'trails/RECEIVE_TRAILS';
export const RECEIVE_TRAIL = 'trails/RECEIVE_TRAIL';
export const REMOVE_TRAIL = 'trails/REMOVE_TRAIL';


export const fetchTrails = () => async dispatch => {
    const response = await csrfFetch('api/trails');

    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: RECEIVE_TRAILS,
            trails: data
        });
    } else {
        // TODO: handle error
    }
};

export const fetchTrail = (trailId) => async dispatch => {
    const response = await csrfFetch(`/api/trails/${trailId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch({
            type: RECEIVE_TRAIL,
            trail: data
        });
    } else {
        // TODO: handle error
    }
};



const trailsReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case RECEIVE_TRAIL:
            newState = {...newState, ...action.trail.trail};
            return newState;
        case RECEIVE_TRAILS:
            newState = {...newState, ...action.trails};
            return newState;
        case REMOVE_TRAIL:
            delete newState[action.trailId]
            return newState;
        default: 
            return state;
    }
};

export default trailsReducer;
