// @flow
import type { ReduxState, Slide } from '../models/redux_state';
import { defaultState } from '../reducers/output';

/**
 * Persiste the application state.
 */
const saveState = (state: ReduxState) => localStorage.setItem('tree', JSON.stringify(state));


/**
 * Load the application state.
 */
const loadState = (): ReduxState => {

  const currentState = localStorage.getItem('tree');

  // Evaluate if currentState exists.
  if (currentState && typeof currentState == 'string') {

    // Try and parse the currentState.
    try {

      return JSON.parse(currentState);
    
    // If the current state can't be parsed load the default values.
    } catch (e) {

      console.log('The default state could not be loaded.');
      return defaultState;
    }

  // Current state does not exists.
  } else {

    return defaultState;
  }
};

module.exports = { saveState, loadState };