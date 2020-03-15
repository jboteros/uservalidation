import {combineReducers} from 'redux';
import UI from './UI/Reducer';
import Prospects from './Prospects/Reducer';

export default () =>
  combineReducers({
    ui: UI,
    prospects: Prospects,
  });
