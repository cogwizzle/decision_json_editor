import React from 'react';
import ReactAce from 'react-ace';

const validateAndSave = (value, callback) => {
  try{

    callback(JSON.parse(value));
  } catch (e) {

  }
}

export default props => (
  <div className='viewer'>
  <ReactAce
      mode="json"
      onChange={value => validateAndSave(value, props.save)}
      value={props.value}
      fontSize={14}
      width='100%'
    />
  </div>
);