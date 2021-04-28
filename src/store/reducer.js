const defaultState = ''

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;