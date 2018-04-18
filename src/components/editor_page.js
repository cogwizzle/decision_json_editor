import React from 'react';
import Editor from './editor';
import Viewer from './viewer';
import { update } from '../creators/output';
import { connect } from 'react-redux';

const styles = {
  wrapper: {
    width: '100%',
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
  <div className='wrapper' style={styles.wrapper}>
    <div className='editor_page' style={styles.editorPage}>
      <Viewer value={JSON.stringify(props.value, undefined, 2)} onChange={props.save} />
      <hr />
      <Editor value={props.value} onSave={props.save} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  save: value => dispatch(update(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);