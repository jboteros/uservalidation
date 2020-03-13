import {createReducer} from '../Config';
import {SET_LOADING, DEVICE_INFO, SET_NEW_PROSPECT} from './Types';

const initialState = {
  loading: false,
  isProspect: false,
  deviceInfo: {
    bundleId: null,
    buildNumber: null,
    version: null,
    readableVersion: null,
  },
};

const setNewProspect = (state = initialState, {payload}) => {
  return {
    ...state,
    isProspect: payload,
  };
};

const setLoading = (state = initialState, {payload}) => {
  return {
    ...state,
    loading: payload,
  };
};
const getDeviceInfo = (state = initialState, {payload}) => {
  return {...state, deviceInfo: payload};
};

const descriptor = {
  [SET_LOADING]: setLoading,
  [DEVICE_INFO]: getDeviceInfo,
  [SET_NEW_PROSPECT]: setNewProspect,
};

export default createReducer(initialState, descriptor);
