import React from 'react';
import Tree from './tree';

export default props => (
  <div className='viewer'>
    <input type='text' id='name' defaultValue={props.value.name} onBlur={event => {
      const nextValue = {...props.value};
      nextValue.name = event.target.value;
      props.onChange(nextValue);
    }}/>
    <Tree
      value={props.value}
      onChange={data => props.onChange(data)}
    />
  </div>
);