// @flow
import React from 'react';
import Editor from './editor';
import Viewer from './viewer';
import { update } from '../../creators/output';
import { connect } from 'react-redux';
import Page from '../page';
import type { ReduxState, Base } from '../../models/redux_state';

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

type Props = {
  value: Base,
  save: Function
};

const BaseComponent = (props: Props) => (
  <Page>
    <div className='wrapper' style={styles.wrapper}>
      <div className='editor_page' style={styles.editorPage}>
        <Viewer value={props.value} onChange={props.save} />
      </div>
    </div>
  </Page>
);

const mapStateToProps = (state: ReduxState): Object => ({
  value: state.value
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  save: value => dispatch(update(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);