import React from 'react';

const styles = {
  titlebar: {
    backgroundColor: '#3D3D3D',
    color: '#FEFEFE',
    paddingTop: '20px',
    paddingBottom: '20px',
    margin: '0px',
    width: '100%',
    display: 'block'
  },
  header: {
    paddingLeft: '20px',
    fontSize: '30px',
    margin: '30px'
  }
};

export default props => (
  <div className='titlebar' style={styles.titlebar}>
    <span className='header_text' style={styles.header}>
      {props.children}
    </span>
  </div>
);