import { AddToDislikedData, AddToLikedData, AddToMatchData, RemoveFromUserData } from "../../utils";
import undoable from 'redux-undo'

const INITIAL_STATE = {
   logged: false,
   loggedUser: '',
   usersData: [],
   firstLoadedData: false
};

const userReducers = (state = INITIAL_STATE, action) => {
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
         };
      case 'REGISTER':
         return {
            ...state,
            usersData: [...state.usersData, action.payload.new]
         };
      case 'LOAD_INITIAL_DATA':
         return {
            ...state, usersData: action.payload.data,
         };
      case 'UPLOAD_IMAGE':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, photos: action.payload }
                  : user
            )
         }
      case 'REMOVE_IMAGE':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, photos: action.payload }
                  : user
            )
         }
      case 'ADD_MATCH':
         const { loggedUserID, matchedUserID } = action.payload;
         let newUsersData = [...state.usersData];
         return {
            ...state,
            usersData: [...AddToMatchData(loggedUserID, matchedUserID, newUsersData)]
         }

      case 'UPDATE_DESCRIPTION':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, description: action.payload }
                  : user
            )
         }
      case 'UPDATE_LOOKING_FOR':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, lookingFor: action.payload }
                  : user
            )
         }
      case 'UPDATE_AGE':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, age: action.payload }
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

      case 'FIRST_LOADED_DATA':
         return {
            ...state, firstLoadedData: true
         };

      case 'REMOVE_MATCH':
         const newUsersDatas = [...state.usersData];
         return {
            ...state,
            usersData: [...RemoveFromUserData(action.loggedUserId, action.matchedUserId, newUsersDatas)]
         }

      case 'ADD_LIKE':
         const newUsersData2 = [...state.usersData];
         return {
            ...state,
            usersData: [...AddToLikedData(action.payload.loggedUserID, action.payload.matchedUserID, newUsersData2)]
         }

      case 'ADD_DISLIKE':
         const newUserSData = [...state.usersData];
         return {
            ...state,
            usersData: [...AddToDislikedData(action.payload.loggedUserID, action.payload.matchedUserID, newUserSData)]
         }

      case 'UPDATE_PASSION':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, passions: action.payload }
                  : user)
         }


      case 'DELETE_PASSION':
         return {
            ...state,
            usersData: state.usersData.map(
               (user) => user.ID === action.id ? { ...user, passions: Array(0) }
                  : user)
         }

      default: return state;
   }

};

const userReducer = undoable(userReducers);
export default userReducer;






