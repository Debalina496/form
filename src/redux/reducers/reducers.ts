const initialState: Record<string, any> = {
    'notification': [{}],
    'isLoggedIn': false
};

export const reducers = (state = initialState, action: Record<string, string>) => {
    console.log("calling reducers", state, action);
    
    switch(action.type){
        case 'save_notification':
            return {...state, notification : [...state.notification, action.payload]}; 
        case 'loggin':
            return {...state, isLoggedIn: action.payload}
        default: return state;
    }   
}