// @flow
import React from 'react';

const styles = {
  treeCard: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid',
    width: '500px',
    maxWidth: '100%',
    margin: '10px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    flex: 4
  },
  controls: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#DEDEDE',
    padding: '10px'
  },
  idAnchor: {
    display: 'flex',
    flex: 1,
    padding: '10px',
    fontSize: 'large'
  },
  slide: {
    flex: 5,
    padding: '10px'
  }
}

type Props = {
  header: string,
  children: Object[] | Object | string,
  controls: Object[] | Object | string
};

export default (props: Props) => (
  <div className='tree_card' style={styles.treeCard}>
    <div className='content' style={styles.content}>
      <div style={styles.idAnchor}>
        {props.header}
      </div>
      <div style={styles.slide}>
        {props.children}
      </div>
    </div>
    <div className='controls' style={styles.controls}>
      {props.controls}
    </div>
  </div>
);