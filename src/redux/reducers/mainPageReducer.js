import { swipeViewName } from "../../GlobalConst";

const INITIAL_STATE = {
    viewName : swipeViewName
};

export const  mainPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_VIEW':
          const {viewName} = action.payload;
           return {
             ...state, viewName
           };
     
         default: return state;
    }
};