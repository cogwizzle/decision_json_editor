// @flow
import React from 'react';
import Menu from './menu';

const styles = {
  page: {
    margin: '0px',
    padding: '0px'
  }
};

type Props = {
  children?: Object[] | Object | string
};

export default (props: Props) => (
  <div className='page' style={styles.page}>
    <Menu />
    {props.children}
  </div>
);