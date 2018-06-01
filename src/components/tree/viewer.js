// @flow
import React from 'react';
import Tree from './tree';
import type { Base } from '../../models/redux_state';

type Props = {
  value: Base,
  onChange: Function
};

type ViewerState = {
  nameValue: ?string
};

export default class Viewer extends React.Component<Props, ViewerState> {
  
  /**
   * Default constructor.
   *
   * @param {Object[]} props Tag properties.
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      nameValue: props.value.name
    };
  }

  handleChange(event: Object) {
    const val: ?string = event.target.value;
    this.setState({nameValue: val});
    const nextValue = { ...this.props.value };
    nextValue.name = val;
    this.props.onChange(nextValue);
  };

  componentWillReceiveProps(props: Props) {

    this.setState({nameValue : props.value.name});
  }

  /**
   * JSX based render function.
   *
   * @return {string} JSX DOM.
   */
  render() {
    return (
      <div className='viewer'>
        <input type='text' ref='name' id='name' value={this.state.nameValue} onBlur={event => {
          const nextValue = { ...this.props.value };
          nextValue.name = event.target.value;
          this.props.onChange(nextValue);
        }} onChange={this.handleChange.bind(this)}/>
        <Tree
          value={this.props.value}
          onChange={data => this.props.onChange(data)}
        />
      </div>
    );
  }
};