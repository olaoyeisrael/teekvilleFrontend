

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    token: ''
}

export default (state = initialState, {type, payload}) =>{
    switch (type){
        case "UPDATE_USER":
            return { ...state,  
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                token: payload.token
            };

        case "GET_USER":
            return{
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName
            }
        default:
            return state
    
    }
    
}
