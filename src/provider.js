// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/output';
import { saveState, loadState } from './persistence/localstorage';
import type { ReduxState } from './models/redux_state';

type ReduxStore = {
  subscribe: Function,
  getState: Function
};

const state: ReduxState = loadState();
const store: ReduxStore = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveState(store.getState()));

type Props = {
  children: Object[] | Object | string 
};

export default (props: Props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);