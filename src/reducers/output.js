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
        parent: null,
        slide: '#Initial Slide',
        link: null 
      }
    ]
  }
};

export default (state: ReduxState = defaultState, action: Action): ReduxState => {
  switch(action.type) {
    case 'UPDATE_OUTPUT':

    try {

      const val: string | Object = action.value;
      return {
        ...state,
        value: (typeof val === 'string') ? JSON.parse(val) : val || defaultState.value
      };
    } catch (e) {

      return state;
    }
    default:

      return state;
  }
};

export { defaultState };