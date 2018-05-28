// @flow
import v4 from 'uuid/v4';
import type { ReduxState } from '../models/redux_state';
import type { Action } from '../models/redux_action';

const defaultState: ReduxState = {
  value: {
    name: 'undefined',
    state: [
      {
        id: v4(),
        parent: undefined,
        slide: '#Initial Slide',
        link: undefined
      }
    ]
  }
};

export default (state: ReduxState = defaultState, action: Action): ReduxState => {
  switch(action.type) {
    case 'UPDATE_OUTPUT':

    try {
      return {
        ...state,
        value: (typeof action.value === 'string') ? JSON.parse(action.value) : action.value
      };
    } catch (e) {

      return state;
    }
    default:

      return state;
  }
};

export { defaultState };