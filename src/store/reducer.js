import {reducer as headerReducer} from '../common/header/store/index';
import {combineReducers} from 'redux';

export default combineReducers({
    header: headerReducer
})