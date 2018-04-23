import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/output';
import { saveState, loadState } from './persistence/localstorage';

const state = loadState();
const store = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => saveState(store.getState()));

export default props => (
  <Provider store={store}>
    {props.children}
  </Provider>
);