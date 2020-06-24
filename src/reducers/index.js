import { combineReducers } from 'redux';
import FetchDataReducer from './FetchDataReducer';


export default combineReducers({
fetchData: FetchDataReducer,
});
