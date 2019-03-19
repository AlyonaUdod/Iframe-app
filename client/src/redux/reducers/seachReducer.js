import * as actionTypes from '../actions/types';

export default function seachList(state={}, action) {
    switch (action.type) {
        case actionTypes.SEACH_VIDEO:
            return action.payload;
        case actionTypes.CLEAR_SEACH_VIDEO:
            return action.payload;
        default: 
            return state;
    }
}