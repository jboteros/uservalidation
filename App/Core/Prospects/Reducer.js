import {createReducer} from '../Config';
import {SET_USER} from './Types';

const initialState = {
  users: [],
};

const setUser = (state = initialState, {payload}) => {
  console.log(state, payload);
  return {
    ...state,
    users: [...state.users, ...payload],
  };
};

const descriptor = {
  [SET_USER]: setUser,
};

export default createReducer(initialState, descriptor);
