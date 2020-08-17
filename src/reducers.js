import {
  CHANGE_MSG_NUMBER,
  SET_ALREADY_IN
 } from './constants';

 const initialStateMsgNumber = {
   msgnumber: 'Loading!'
 }

export const changeMsgNumber = (state=initialStateMsgNumber, action={}) => {
  switch (action.type) {
    case CHANGE_MSG_NUMBER:
      return Object.assign({}, state, {msgnumber: 'Loading!'})
    default:
      return state
  }
}
