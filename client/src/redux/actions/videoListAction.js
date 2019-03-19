import * as actionTypes from '../actions/types';
import { getVideoList, addVideo, deleteVideo } from '../api/apiDB'

// Get Video List from DB
export const queryVideoListFromDB = () => dispatch => {
    return getVideoList()
        .then(res => dispatch(addVideoListToStore(res.data)))
        .catch(err=> console.error(err))
}
export function addVideoListToStore(data) {
    return {
        type: actionTypes.GET_ALL_VIDEO,
        payload: data,
    }
}

// Add Video to DB
export const addVideoToDB = (obj) => dispatch => {
    return addVideo(obj)
    .then(res => dispatch(addAddedVideoToStore(res.data)))
    .catch(err=> console.error(err))
}
export function addAddedVideoToStore(data) {
    return {
        type: actionTypes.ADD_VIDEO, 
        payload: data,
    }
}

// Delete Video From DB
export const deleteVideoFromDB = (id) => dispatch => {
    return deleteVideo(id)
        .then(() => dispatch(removeVideoFromStore(id)))
        .catch(err=> console.error(err))
}
export function removeVideoFromStore(id) {
    return {
        type: actionTypes.DELETE_VIDEO, 
        payload: {id: id},
    }
}