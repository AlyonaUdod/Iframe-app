import {combineReducers} from 'redux';
import videoList from './videoListReducer';
import seachList from './seachReducer';
import videoId from './currentVideoIdReducer';
import queryText from './queryReducer';

const rootReducers = combineReducers({
    videoList, 
    seachList,
    videoId,
    queryText,
});

export default rootReducers;
