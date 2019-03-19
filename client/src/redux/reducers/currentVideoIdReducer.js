import * as actionTypes from '../actions/types';

export default function videoId (state='', action){
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT_VIDEO_ID:
            return action.payload;
        default: 
            return state;
    };
};