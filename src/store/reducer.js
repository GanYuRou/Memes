const defaultState = ''

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CODE':
            return {...state, 'code': action.payload};
        case 'NICK':
            return {...state, 'nick': action.payload};
        default:
            return state;
    }
}

export default reducer;
