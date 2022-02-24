import { swipeViewName } from "../../GlobalConst";

const INITIAL_STATE = {
    viewName : swipeViewName ,
    chosenChatID : ''
};

export const  mainPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_VIEW':
          const {viewName} = action.payload;
          const {chosenChatID} = action.payload;
           return {
             ...state, viewName , chosenChatID
           };
     
         default: return state;
    }
};