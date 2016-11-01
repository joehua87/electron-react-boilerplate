// @flow

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
  LOCATION_CHANGE,
} from 'react-router-redux';

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  route: routeReducer,
});

export default rootReducer;
