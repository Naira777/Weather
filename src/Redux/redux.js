import { createStore, combineReducers, applyMiddleware } from "redux";

import thunkMiddleware  from 'redux-thunk';
import weatherReducer from "./weather-reducer";


const reducers = combineReducers({

weatherPage: weatherReducer

});


const store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;