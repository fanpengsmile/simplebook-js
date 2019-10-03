import {reducer as headerReducer} from '../common/header/store/index';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    header: headerReducer
})