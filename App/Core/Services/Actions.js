import {SEND_USER} from './Types';

export const sendUser = () => async dispatch => {
  let data = [];

  return dispatch({type: SEND_USER, payload: data});
};
