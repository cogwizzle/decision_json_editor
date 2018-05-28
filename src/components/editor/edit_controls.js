// @flow
import React from 'react';

type Props = {
  onSave?: Function
};

const styles = {
  controls: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  save: {
    backgroundColor: '#40FF8B',
    color: '#FEFFFE',
    border: 'none',
    padding: '10px',
    fontSize: '20px'
  }
};

export default (props: Props) => {

  return (<div className='controls' style={styles.controls}>
    <input type='button' className='save' style={styles.save} value='Save' onClick={props.onSave} />
  </div>);
};