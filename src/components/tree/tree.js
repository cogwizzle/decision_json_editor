// @flow
import React from 'react';
import Controls from './node_controls';
import v4 from 'uuid/v4';
import Card from './tree_card';
import type { Base, Slide } from '../../models/redux_state';

type Props = {
  value: Base
};

export default (props: Props) => {
  
  const root = props.value.state.find(state => null === state.parent);
  
  return (<div className='tree'>
    {(root) ? createTreeNodes(root, props.value.state) : []}
  </div>);
};

const styles = {
  indent: {
    marginLeft: '20px'
  }
}

const createTreeNodes = (node: Slide, states: Slide[]) => {

  const children = states.filter(state => state.parent === node.id);

  return (
    <div className={node} key={node.id}>
      <Card 
        header={node.id}
        controls={
          <Controls
            addLink={`./new/${node.id}`}
            editLink={`./edit/${node.id}`}
            removeLink={`./remove/${node.id}`}
            parent={node.parent}
          />
        }>
        {(node.slide) ?  node.slide : []}
      </Card>
      <div style={styles.indent}>
        {children.map(child => createTreeNodes(child, states))}
      </div>
    </div>
  );
}

const shorten = (str, length) => (str.length > length) ? `${str.substring(0, length)}...` : str;