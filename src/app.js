import React from 'react';
import ReactDom from 'react-dom';
import Provider from './provider';
import EditorPage from './components/editor_page';

ReactDom.render(
  <Provider>
    <EditorPage />
  </Provider>,
  document.querySelector('#anchor')
)