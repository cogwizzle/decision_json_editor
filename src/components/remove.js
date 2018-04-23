import React from 'react';
import { update } from '../creators/output';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const BaseComponent = props => {
  return (<Redirect to='/'/>);
};

const mapStateToProps = state => ({
  fullValue: state.value
});

const mapDispatchToProps = dispatch => ({
  update: value => dispatch(update(value))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const props = ownProps.match.params;
  const id = props.node;
  const nextValue = {...stateProps.fullValue};
  const states = nextValue.state.filter(state => state.id !== id);

  nextValue.state = states;
  dispatchProps.update(nextValue);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BaseComponent);