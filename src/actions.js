import {
  CHANGE_MSG_NUMBER,
  SET_ALREADY_IN
} from "./constants"

export const setMsgNumber = (number) => ({
  type: CHANGE_MSG_NUMBER,
  payload: number
})

export const setAlreadyIn = (data) => ({
  type: SET_ALREADY_IN,
  payload: data
})
