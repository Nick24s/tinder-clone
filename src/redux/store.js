
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {userReducer } from './reducers/userReducer';
import {mainPageReducer} from './reducers/mainPageReducer';

const rootReducer = combineReducers({

    usersData: userReducer,
    mainPage : mainPageReducer,
    


});
const store = createStore(rootReducer ,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;