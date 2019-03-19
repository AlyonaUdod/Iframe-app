import * as actionTypes from '../actions/types';

export function handlerChange(value) {
    return {
       type: actionTypes.HANDLER_CHANGE, 
       payload: value,
    }
}

export function clearInput(){
    return {
        type: actionTypes.CLEAR_INPUT,
        payload: '',
    }
}