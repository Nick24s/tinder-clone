const INITIAL_STATE = {
    rooms : [],
};

export const  roomsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ROOM':
           return {
             ...state,
             rooms : [...state.rooms, action.payload]
           };
     
         default: return state;
    }
};