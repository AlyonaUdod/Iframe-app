import {combineReducers} from 'redux';
import videoList from './videoListReducer';
import seachList from './seachReducer';
import videoId from './currentVideoIdReducer';


const rootReducers = combineReducers({
    videoList, 
    seachList,
    videoId
})

export default rootReducers;
