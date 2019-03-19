import * as actionTypes from '../actions/types';

export function getSingleVideo(id) {
    return {
        type: actionTypes.UPDATE_CURRENT_VIDEO_ID,
        payload: id,
    }
}