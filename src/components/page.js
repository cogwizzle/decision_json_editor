import React from 'react';
import Menu from './menu';

const styles = {
  page: {
    margin: '0px',
    padding: '0px'
  }
};

export default props => (
  <div className='page' style={styles.page}>
    <Menu />
    {props.children}
  </div>
);