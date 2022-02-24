import { useSelector } from "react-redux";

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
      case 'UPLOAD_IMAGE':
         return {
            ...state,
            usersData: state.usersData.map(
               (content, i) => content.ID === action.id ? { ...content, location: action.payload }
                  : content
            )
         }
      case 'UPDATE_DESCRIPTION':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, description: action.payload }
                  : user
            )
         }
      case 'UPDATE_LOCATION':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, location: action.payload }
                  : user
            )
         }
      case 'UPDATE_SCHOOL':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, school: action.payload }
                  : user
            )
         }

      case 'UPDATE_COMPANY':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, company: action.payload }
                  : user
            )
         }
      case 'UPDATE_JOB_TITLE':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, jobTitle: action.payload }
                  : user
            )
         }
      case 'UPDATE_GENDER':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, gender: action.payload }
                  : user
            )
         }
      case 'ADD_MATCH':
         return {
            ...state,
            // usersData : [console.log(action.payload)]
            // usersData : [[...state.usersData.map(user => {
            // if(user.ID === action.payload.loggedUserID)
            // })]
            // usersData : [...state.usersData.map(user =>{ if( user.ID === action.payload.loggedUserID)) ]   
            // return {...state, products: state.products.map(p => p.id === productId ? {...p, quantity:p.quantity+1} : p)}

         };

      default: return state;
   }
};