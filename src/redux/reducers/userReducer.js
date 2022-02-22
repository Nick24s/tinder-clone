const INITIAL_STATE = {
   logged: false,
   loggedUser: '',
   usersData: []
};

export const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'LOGIN':
         return {
            ...state,
            logged: true,
            loggedUser: action.payload.id,
         };
      case 'LOGOUT':
         return {
            ...state,
            logged: false,
            loggedUser: '',
         };
      case 'LOAD_INITIAL_DATA':

         return {
            ...state, usersData: action.payload.data,
         };
      default: return state;
   }
};