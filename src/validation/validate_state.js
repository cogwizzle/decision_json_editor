// @flow
import type { ReduxState, Base, Slide } from '../models/redux_state';

export default (state: ReduxState) => {

  if (state && typeof state == 'object') {
    
    if (!(state.value && state.value.name)) {

      return false;
    }

    if (!(state.value && state.value.state && Array.isArray(state.value.state))) {

      return false;
    } else {

      return state.value.state.every((slide: Slide) => {

        return typeof slide == 'object' && slide.id;
      });
    }
  } else {

    return false;
  }
}