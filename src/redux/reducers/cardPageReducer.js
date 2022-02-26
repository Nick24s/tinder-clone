const INITIAL_STATE = {
    user : [],
};

export const  cardPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER':
           return {
             ...state,
             user : [...state.user, action.payload]
           };
     
         default: return state;
    }
};