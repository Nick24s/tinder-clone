
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer  from './reducers/userReducer';
import {mainPageReducer} from './reducers/mainPageReducer';
import {cardPageReducer } from './reducers/cardPageReducer';
import { roomsReducer } from './reducers/roomsReducer';


const rootReducer = combineReducers({

    usersData: userReducer,
    mainPage : mainPageReducer,
    cardUser : cardPageReducer,
    rooms : roomsReducer,

});
const store = createStore(rootReducer ,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;