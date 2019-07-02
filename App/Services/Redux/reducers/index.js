import {combineReducers} from 'redux';
import notes from './notes';

const appReducers = combineReducers({
    notes
});

export default appReducers;