
const RECEIVE_USER = 'users/RECEIVE_USER'
const REMOVE_USER = 'users/REMOVE_USER'

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const removeUser = userId => ({   
    type: REMOVE_USER,
    userId
});

export const loginUser = user => async dispatch => {
    const response = await csrfFetchUser('api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    })

    const data = await response.json()
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user))
}

export const logoutUser = userId => async dispatch => {
    const response = await csrfFetchUser('api/session', {
        method: 'DELETE'
    });

    const data = await response.json();
    sessionStorage.setItem('currentUser', null)
    dispatch(removeUser(userId))
}

export const createUser = user => async dispatch => {
    const response = await csrfFetchUser('api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    const data = await response.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(createUser(data.user));
}

function userReducer(state = {}, action) {

    const newState = state
    switch (action.type) {
        case REMOVE_USER:
            delete newState[action.userId]
            return newState;
        case RECEIVE_USER:
            newState[action.userId] =action.user
            return newState;
        default:
            return state;
    }
}

export default userReducer