import { csrfFetch } from "./csrf";

export const LOGIN_MEMBER = 'session/loginMember';
export const LOGOUT_MEMBER = 'session/logoutMember';

export const setCurrentMember = member => {
    return ({
        type: LOGIN_MEMBER,
        member: member
    });
};

export const removeCurrentMember = memberId => {
    return ({
        type: LOGOUT_MEMBER,
        memberId: memberId
    });
};

export const loginMember = (member) => async dispatch => {
    const response = await csrfFetch('api/session', {
        method: 'POST',
        body: JSON.stringify({
            member: member
        })
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) throw data;
        storeCurrentMember(data.member)
        dispatch(setCurrentMember(data.member))
    } else {
        throw response
    }
    return response;
};

export const logoutMember = (currentMemberId) => async dispatch => {
    const response = await csrfFetch('api/session', {
        method: 'DELETE',
    });
    storeCurrentMember();
    dispatch(removeCurrentMember(currentMemberId));
};

export const signupMember = (member) => async dispatch => {
    const response = await csrfFetch('api/members', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(member)
    })

    const data = response.json();
    storeCurrentMember(data.member);
    dispatch(setCurrentMember(data.member));
}

const storeCurrentMember = member => {
    if (member) {
        sessionStorage.setItem('currentMember', JSON.stringify(member))
    } else {
        sessionStorage.removeItem('currentMember')
    }
}

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

export const restoreSession = () => async dispatch =>{
    const response = await fetch('/api/session');
    if (response.ok) {
        storeCSRFToken(response);   
        const data = await response.json();
        storeCurrentMember(data.member);
        dispatch(setCurrentMember(data.member));
    }
}

const initialState = { 
    member: JSON.parse(sessionStorage.getItem("currentMember"))
};

const sessionReducer = (state = initialState, action) => { 
    let newState = {...state}
    switch (action.type) {
        case LOGOUT_MEMBER:
            newState = {...newState, member: null}
            return newState;
        case LOGIN_MEMBER:
            if (action.member) {
                newState.member = action.member.id
            }
            return newState;
        default:
            return newState;
    }
};

export default sessionReducer;