import {createReducer} from '../Config';
import {SEND_USER} from './Types';

import _ from 'lodash';

const initialState = {
  users: [],
};

const sendUser = (state = initialState, {payload}) => {
  return {
    ...state,
    users: payload,
  };
};

const descriptor = {
  [SEND_USER]: sendUser,
};

export default createReducer(initialState, descriptor);
