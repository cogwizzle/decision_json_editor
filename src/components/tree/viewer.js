import React from 'react';
import ReactAce from 'react-ace';
import Tree from './tree';

const validateAndSave = (value, callback) => {
  try{

    callback(JSON.parse(value));
  } catch (e) {

  }
}

export default props => (
  <div className='viewer'>
    <Tree
      value={props.value}
      onChange={data => validateAndSave(data)}
    />
  </div>
);