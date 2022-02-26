import { AddToLikedData, AddToMatchData, RemoveFromUserData } from "../../utils";

const INITIAL_STATE = {
   logged: false,
   loggedUser: '',
   usersData: [],
   firstLoadedData : false
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
               (user) => user.ID === action.id ? { ...user, photos: action.payload}
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
               ...state, firstLoadedData : true
            };

         
         
         case 'REMOVE_MATCH':

            const newUsersDatas = [...state.usersData];
            return {
               ...state,
               usersData: [...RemoveFromUserData(action.loggedUserId, action.matchedUserId, newUsersDatas)]
            }

            case 'ADD_LIKE':
               // const {loggedUserId, matchedUserId } = action.payload;

              const  newUsersData2 = [...state.usersData];
               return {
                  ...state,
                  usersData: [...AddToLikedData(action.payload.loggedUserID, action.payload.matchedUserID, newUsersData2)]
               }
   
               default: return state;
            }
};