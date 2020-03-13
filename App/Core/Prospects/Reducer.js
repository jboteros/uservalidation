import {createReducer} from '../Config';
import {SET_USER} from './Types';

const initialState = {
  users: [],
};

const setUser = (state = initialState, {payload}) => {
  let stateUsers = state.users;

  stateUsers.push(payload);

  return {
    ...state,
    users: stateUsers,
  };
};

const descriptor = {
  [SET_USER]: setUser,
};

export default createReducer(initialState, descriptor);
