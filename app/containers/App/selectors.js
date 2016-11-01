import { createSelector } from 'reselect';

const selectState = () => (state) => state.get('app');

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectJsState = () => createSelector(
  selectState(),
  (substate) => substate.toJS()
);

export {
  selectState,
  selectLocationState,
};

export default selectJsState;
