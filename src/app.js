import React from 'react';
import ReactDom from 'react-dom';
import Provider from './provider';
import Router from './components/router';

ReactDom.render(
  <Provider>
    <Router />
  </Provider>,
  document.querySelector('#anchor')
)