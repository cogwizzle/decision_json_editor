// @flow
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TreePage from './tree/tree_page';
import EditPage from './editor/editor_page';
import Remove from './remove';

export default () => (
    <Router>
      <Switch>
        <Route exact path='/' component={TreePage} />
        <Route path='/new/:parent' component={EditPage} />
        <Route path='/edit/:node' component={EditPage} />
        <Route path='/remove/:node' component={Remove} />
      </Switch>
    </Router>
);