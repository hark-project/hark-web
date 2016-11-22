import {combineReducers} from 'redux';

import machineReducer from './machineReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    machines: machineReducer,
    images: imageReducer,
});
