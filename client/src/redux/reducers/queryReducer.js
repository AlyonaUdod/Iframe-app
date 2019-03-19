import * as actionTypes from '../actions/types';

export default function query(state='', action) {
    switch (action.type) {
        case actionTypes.HANDLER_CHANGE:
            return action.payload;
        case actionTypes.CLEAR_INPUT:
            return action.payload;
        default: 
            return state;
    }
}