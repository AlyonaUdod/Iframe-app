import * as actionTypes from '../actions/types';
import { getVideoList } from '../api/apiYouTube';

export const queryVideo = (param) => dispatch => {
    return getVideoList(param)
    .then(res => dispatch(seachVideo(res.data)))
    .catch(err=> console.error(err));
};

export function seachVideo(data) {
    return {
       type: actionTypes.SEACH_VIDEO, 
       payload: data,
    };
};

export function clearSeach(){
    return {
        type: actionTypes.CLEAR_SEACH_VIDEO,
        payload: {},
    };
};