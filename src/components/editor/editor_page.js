// @flow
import React from 'react';
import v4 from 'uuid/v4';
import outputCreators from '../../creators/output';
import { connect } from 'react-redux';
import Page from '../page';
import Controls from './edit_controls';
import { Redirect } from 'react-router';
import Help from 'react-icons/lib/fa/question-circle';
import type { ReduxState, Base, Slide } from '../../models/redux_state';

type Props = {
  fullValue: ReduxState,
  id: string,
  parent: string,
  slide: string,
  link: string,
  update: Function
};

type State = {
  id: string,
  parent: string,
  slide: string,
  link: string,
  toHome: boolean
}

class EditorPage extends React.Component<Props, State> {
  slide: ?HTMLTextAreaElement
  link: ?HTMLInputElement

  /**
   * Default constructor.
   *
   * @param {Object[]} props Tag properties.
   */
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || v4(),
      parent: props.parent,
      slide: props.slide || '',
      link: props.link || '',
      toHome: false
    }
  }

  save() {
    const value = {...this.props.fullValue.value};
    const newState: Slide = value.state.find(state => this.state.id === state.id) ||
      {id: this.state.id, parent: this.state.parent};
    value.state = value.state.filter(state => state.id !== this.state.id);
    newState.slide =  this.refs.slide.value || '';
    newState.link = this.refs.link.value || '';
    value.state = [...value.state, newState];

    this.props.update(value);
    this.setState({toHome: true});
  }

  /**
   * JSX based render function.
   *
   * @return {string} JSX DOM.
   */
  render() {
    const styles = { wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }, editorPage: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        maxWidth: '1000px',
        width: '100%',
      },
      branch: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
      },
      label: {
        flex: 1
      },
      input: {
        flex: 3,
        width: '100%',
      },
      icon: {
        fontSize: '16px'
      }
    };

    if (this.state.toHome) {

      return (<Redirect to='/' />);
    } else {

      return (
        <Page>
          <div className='wrapper' style={styles.wrapper}>
            <div className='editor_page' style={styles.editorPage}>
              <div style={styles.branch}>
                <div>
                  <label style={styles.label} htmlFor='link'>Link:</label><input data-tip='help' id='link' ref='link' type='text' style={styles.input} defaultValue={this.state.link} />
                </div>
                <div>
                  <div>
                    <label style={styles.label} htmlFor='slide'>Slide Markdown 
                    <a style={styles.icon} target='_tab' href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'><span title='Help'><Help /></span></a>:</label>
                  </div>
                  <textarea id='slide' ref='slide' type='text' rows={15} style={styles.input} defaultValue={this.state.slide} />
                </div>
              </div>
              <Controls onSave={this.save.bind(this)}/>
            </div>
          </div>
        </Page>
      );
    }
  }
}

const mapStateToProps = (state: Object) => ({
  fullValue: state,
  slides: state.value.state
});

const mapDispatchToProps = (dispatch: Function) => ({
  update: (value: Base) => dispatch(outputCreators.update(value))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const props = ownProps.match.params;
  const currentSlide = (props.node) ? stateProps.slides.find(state => state.id === props.node) || {}: {};

  return {
    id: props.node || undefined,
    parent: currentSlide.parent || props.parent || undefined,
    slide: currentSlide.slide || undefined,
    link: currentSlide.link || undefined,
    fullValue: stateProps.fullValue,
    update: dispatchProps.update
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditorPage);