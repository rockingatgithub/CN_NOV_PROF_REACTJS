const initialState = {
    user: {},
    isLoggedIn: false,
    counter: 0,
    interviews: []
}


function main ( state=initialState, action ) {

    switch (action.type) {
        case 'SIGNUP':
            
            return { ...state, user: action.data, isLoggedIn: true }

        case 'LOGOUT': 

            return { ...state, isLoggedIn: false, user: {} }

        case 'GET_INTERVIEWS':
            return {  ...state, interviews: action.data }
        
        case 'INC_COUNTER':
            return { ...state, counter: state.counter + action.data }

            case 'DEC_COUNTER':
                return { ...state, counter: state.counter - action.data }
    
        default:
            return state
    }

}

export default main
