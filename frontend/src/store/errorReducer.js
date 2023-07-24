export const ADDERRORS = 'errors/ADDERRORS'


export const addErrors = (errors) => async dispatch => {
    dispatch({
        type: ADDERRORS,
        errors: errors
    })
}


const errorReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADDERRORS: 
            newState = {...newState, ...action.errors}
            return newState;
        default:
            return state;
    }
}   

export default errorReducer