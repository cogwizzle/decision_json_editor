import React from 'react';
import TitleBar from './title_bar';

const styles = {
  page: {
    margin: '0px',
    padding: '0px'
  }
};

export default props => (
  <div className='page' style={styles.page}>
    <TitleBar>Decision JSON Editor</TitleBar>
    {props.children}
  </div>
);