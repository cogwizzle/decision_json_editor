import React from 'react';
import TitleBar from './title_bar';
import { update } from '../creators/output';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import swal from 'sweetalert';
import BetterFile from './better_file';

const styles = {
  navLinks: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FEFEFE',
    padding: '10px',
    textDecoration: 'none',
    fontSize: '16px',
  },
  submenu: {
    backgroundColor: '#3D3D3D'
  }
};

const BaseComponent = props => (
  <div>
    <TitleBar>Decision JSON Editor</TitleBar>
    <div className='navs' style={styles.submenu}>
      <input type='button' onClick={props.reset} value='New' style={styles.navLinks} />
      <BetterFile onChange={props.load} style={styles.navLinks}>Load</BetterFile>
      <a href={props.save} style={styles.navLinks} download={`${props.name}.json`} target='_blank'>Save</a>
    </div>
</div>
);

const mapStateToProps = state => ({
  fullValue: state.value
});

const mapDispatchToProps = dispatch => ({
  update: value => dispatch(update(value))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
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
    window.location.reload();
  },
  load: event => {
    if (window.FileReader) {

      const reader = new FileReader();
      console.log('reader: ', reader);

      reader.onload = () => {

        dispatchProps.update(reader.result);
        window.location.reload();
      };
      reader.readAsText(event.target.files[0]);
    }
  },
  save: `data:text/plain,${encodeURI(JSON.stringify(stateProps.fullValue))}`,
  name: stateProps.fullValue.name
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BaseComponent);