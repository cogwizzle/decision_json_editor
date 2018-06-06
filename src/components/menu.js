// @flow
import React from 'react';
import TitleBar from './title_bar';
import { update } from '../creators/output';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import swal from 'sweetalert';
import BetterFile from './better_file';
import type { ReduxState } from '../models/redux_state';
import validateState from '../validation/validate_state';
import { defaultState } from '../reducers/output';

const styles = {
  navLinks: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FEFEFE',
    padding: '10px',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    font: 'inherit'
  },
  submenu: {
    backgroundColor: '#3D3D3D'
  }
};

type Props = {
  reset: Function,
  load: Function,
  save: string,
  name: string
};

const BaseComponent = (props: Props) => (
  <div>
    <TitleBar>Decision JSON Editor</TitleBar>
    <div className='navs' style={styles.submenu}>
      <input type='button' onClick={props.reset} value='New' style={styles.navLinks} />
      <BetterFile onChange={props.load} style={styles.navLinks}>Load</BetterFile>
      <a href={props.save} style={styles.navLinks} download={`${props.name}.json`} target='_blank'>Save</a>
      <a href='https://github.com/jfehrman/decision_json_editor/blob/master/README.md' style={styles.navLinks} target='_help'>Help</a>
    </div>
</div>
);

const mapStateToProps = (state: ReduxState): Object => ({
  fullValue: state.value
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  update: value => dispatch(update(value))
});

const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps): Object => ({
  reset: () => {
    dispatchProps.update({
      name: 'undefined',
      state: [
        {
          id: v4(),
          parent: null,
          slide: '#Initial Slide',
          link: null
        }
      ]
    });
  },
  load: event => {
    if (window.FileReader) {

      const reader = new FileReader();

      reader.onload = () => {

        try{

          const result = JSON.parse((typeof reader.result == 'string') ? reader.result : '');

          dispatchProps.update((validateState({value: result})) ? result : defaultState.value);
        } catch (e) {

          alert('Invalid decision tree.');
        }
      };
      reader.readAsText(event.target.files[0]);
    }
  },
  save: `data:text/plain,${encodeURI(JSON.stringify(stateProps.fullValue))}`,
  name: stateProps.fullValue.name
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BaseComponent);