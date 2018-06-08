// @flow
import React from 'react';
import ReactDom from 'react-dom';
import Provider from './provider';
import Router from './components/router';
import Offline from './service_worker/offline';

const mountPoint: ?HTMLElement = document.querySelector('#anchor');

if (mountPoint)
  ReactDom.render(
    <Provider>
      <Router />
    </Provider>,
    mountPoint
  );

Offline();