import React from 'react';
import Editor from './editor';
import Viewer from './viewer';
import { update } from '../../creators/output';
import { connect } from 'react-redux';
import Page from '../page';

const styles = {
  wrapper: {
    width: '100%',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center'
  },
  editorPage: {
    margin: '10px',
    maxWidth: '1000px',
    width: '100%',
    
  }
};

const BaseComponent = props => (
  <Page>
    <div className='wrapper' style={styles.wrapper}>
      <div className='editor_page' style={styles.editorPage}>
        <Viewer value={props.value} onChange={props.save} />
      </div>
    </div>
  </Page>
);

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  save: value => dispatch(update(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);