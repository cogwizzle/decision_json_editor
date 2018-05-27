// @flow
import type { Base } from '../models/redux_state';
import type { Action } from '../models/redux_action';

const update = (newValue: Base): Action => ({
  type: 'UPDATE_OUTPUT',
  value: newValue 
});

export default { update };