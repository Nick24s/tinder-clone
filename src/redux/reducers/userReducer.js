import { UpdateUserData } from "../../utils";

const INITIAL_STATE = {
   logged: false,
   loggedUser: '',
   usersData: [],
   // registeredUsers : []
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
      case 'REGISTER':
         return {
            ...state,
            usersData: [...state.usersData, action.payload]
         };
      case 'LOAD_INITIAL_DATA':
         return {
            ...state, usersData: action.payload.data,
         };
      case 'UPDATE_LOCATION':
         return {
            ...state,
            usersData: state.contents.map(
               (content, i) => content.ID === action.id ? { ...content, location: action.payload }
                  : content
            )
         }
      case 'UPLOAD_IMAGE':
         return {
            ...state,
            usersData: state.usersData.map(
               (content, i) => content.ID === action.id ? { ...content, location: action.payload }
                  : content
            )
         }
      case 'ADD_MATCH':
         const { loggedUserID, matchedUserID } = action.payload;
         let newUsersData = [...state.usersData];
      

         return {
            ...state,
           usersData : [...UpdateUserData(loggedUserID, matchedUserID, newUsersData)]


         };

      default: return state;
   }
};