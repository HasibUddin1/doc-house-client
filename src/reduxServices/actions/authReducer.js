import { combineReducers } from "redux";

const initialAuthState = {
    user: null,
    error: null,
    isLoading: false
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth:authReducer
}) 

export default rootReducer;