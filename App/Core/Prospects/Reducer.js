import {createReducer} from '../Config';
import {SET_USER} from './Types';

const initialState = {
  users: [],
};

const setUser = (state = initialState, {payload}) => {
  console.log('reducer:setUser', state, payload);
  let stateUsers = state.users;

  stateUsers.push(payload);

  console.log('stateUsers', stateUsers);
  return {
    ...state,
    users: stateUsers,
  };
};

const descriptor = {
  [SET_USER]: setUser,
};

export default createReducer(initialState, descriptor);
