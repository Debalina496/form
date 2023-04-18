import { reducers } from "./reducers";
import { combineReducers } from 'redux';
import {createStore} from 'react-redux';

const rootReducer = combineReducers({reducers});

export default rootReducer;