import React from 'react';

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

export default props => (
  <div className='controls' style={styles.controls}>
    <input type='button' className='save' style={styles.save} value='Save' onClick={props.onSave} />
  </div>
)