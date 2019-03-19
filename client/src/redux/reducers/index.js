import {combineReducers} from 'redux';
import videoList from './videoListReducer';
import seachList from './seachReducer';
import videoId from './currentVideoIdReducer';
import query from './queryReducer';

const rootReducers = combineReducers({
    videoList, 
    seachList,
    videoId,
    query,
})

export default rootReducers;
