import * as actionTypes from '../actions/types';

export default function videoList (state=[], action) {
    switch (action.type) {
        case actionTypes.GET_ALL_VIDEO:
            return action.payload;
        case actionTypes.ADD_VIDEO:
            return [...state, action.payload]
        case actionTypes.DELETE_VIDEO:
            return state.filter(el => el.videoId !== action.payload.id)
        default: 
            return state;
    }
}