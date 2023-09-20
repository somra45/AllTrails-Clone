import { csrfFetch } from "./csrf"


export const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES';

export const addFavorites = (memberId) => async dispatch => {
    const response = await csrfFetch(`/api/members/${memberId}/favorites`);
    if (response.ok) {
        const data = await response.json()
        dispatch({
            type: RECEIVE_FAVORITES,
            favorites: data
        })
    } else {
        // TODO: handle error
    }
    return response;
}

const favoritesReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type ) {
        case RECEIVE_FAVORITES:
            newState = {...state, ...action.favorites}
            return newState
        default: 
            return newState
    }
}

export default favoritesReducer