import React from 'react';
import TitleBar from './title_bar';
import { update } from '../creators/output';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import swal from 'sweetalert';

const BaseComponent = props => (
  <div>
    <TitleBar>Decision JSON Editor</TitleBar>
    <div className='navs'>
      <input type='button' onClick={props.reset} value='New' />
      <input type='button' onClick={props.load} value='Load' />
      <input type='button' onClick={props.save} value='Save' />
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
  load: () => {
    dispatchProps.update(prompt('Please paste your json file contents:'));
    //window.location.reload();
  },
  save: () => swal(JSON.stringify(stateProps.fullValue, undefined, 2))
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BaseComponent);