import React from 'react';
import v4 from 'uuid/v4';

const styles = {
  fileInput : {
    display: 'none'
  },
  inline: {
    display: 'inline-block'
  }
};

export default props => {
  const id = v4();

  return (
    <div className='file' style={styles.inline}>
      <label htmlFor={id} style={props.style}>{props.children}</label>
      <input type='file' id={id} onChange={props.onChange} style={styles.fileInput} />
    </div>
  );
};