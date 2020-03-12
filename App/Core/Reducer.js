import {combineReducers} from 'redux';

import UI from './UI/Reducer';
import Services from './Services/Reducer';
import Prospects from './Prospects/Reducer';

export default () =>
  combineReducers({
    ui: UI,
    services: Services,
    prospects: Prospects,
  });
