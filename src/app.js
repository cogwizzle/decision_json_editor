// @flow
import React from 'react';
import ReactDom from 'react-dom';
import Provider from './provider';
import Router from './components/router';

const mountPoint = document.querySelector('#anchor');

if(mountPoint)
  ReactDom.render(
    <Provider>
      <Router />
    </Provider>,
    mountPoint
  );