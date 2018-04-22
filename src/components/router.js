import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TreePage from './tree/tree_page';
import EditPage from './editor/editor_page';

console.log('editPage: ', EditPage);
export default props => (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <TreePage />} />
        <Route path='/new/:parent' component={() => <EditPage parent={parent} />} />
      </Switch>
    </Router>
);