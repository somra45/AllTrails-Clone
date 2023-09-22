import { csrfFetch } from "./csrf";
import { LOGOUT_MEMBER } from "./session";
export const RECEIVE_MEMBER = 'members/RECEIVE_MEMBER'
export const REMOVE_MEMBER = 'members/REMOVE_MEMBER'

export const receiveMember = member => ({
    type: RECEIVE_MEMBER,
    member: member
});


export const fetchMember = memberId => async dispatch => {
    const response = await csrfFetch(`api/members/${memberId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveMember(data.member));
    }   
};

export const createMember = member => async dispatch => {
    const response = await csrfFetch('api/members', {
        method: 'POST',
        body: JSON.stringify(member)
    });
    const data = await response.json();
    sessionStorage.setItem('currentMember', JSON.stringify(data.member));
    dispatch(receiveMember(data.member));
}

function memberReducer(state = {}, action) {

    const newState = {...state}
    switch (action.type) {
        case RECEIVE_MEMBER:
            newState[action.member.id] = action.member
            return newState;
        case LOGOUT_MEMBER:
            return ({});
        default:
            return state;
    };
};

export default memberReducer;