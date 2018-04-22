import React from 'react';
import v4 from 'uuid/v4';
import outputCreators from '../../creators/output';
import { connect } from 'react-redux';
import Page from '../page';
import Controls from './edit_controls';

class EditorPage extends React.Component {
  
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
      link: props.link || ''
    }
  }

  save() {
    const value = {...this.props.fullValue.value};
    const newState = value.state.find(state => this.state.id === state.id) ||
      {id: this.state.id, parent: this.state.parent};
    value.state = value.state.filter(state => state.id !== this.state.id);
    newState.slide = this.refs.slide.value;
    newState.link = this.refs.link.value;
    value.state = [...value.state, newState];

    this.props.update(value);
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
      },
      editorPage: {
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
      }
    };

    return (
      <Page>
        <div className='wrapper' style={styles.wrapper}>
          <div className='editor_page' style={styles.editorPage}>
            <div style={styles.branch}>
              <div>
                <label style={styles.label} htmlFor='link'>Link:</label><input id='link' ref='link' type='text' style={styles.input} defaultValue={this.state.link} />
              </div>
              <div>
                <label style={styles.label} htmlFor='slide'>Slide Markdown:</label><textarea id='slide' ref='slide' type='text' rows={15} style={styles.input} defaultValue={this.state.slide} />
              </div>
            </div>
            <Controls onSave={this.save.bind(this)}/>
          </div>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  fullValue: state,
  slides: state.state
});

const mapDispatchToProps = dispatch => ({
  update: value => dispatch(outputCreators.update(value))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  id: ownProps.id || undefined,
  parent: (ownProps.id) ? (stateProps.slides.find(state => state.id === ownProps.parent) || {parent: undefined}).parent : undefined,
  slide: (ownProps.id) ? (stateProps.slides.find(state => state.id === ownProps.id) || {slide: undefined}).slide : undefined,
  link: (ownProps.id) ? (stateProps.slides.find(state => state.id === ownProps.id) || {link: undefined}).link : undefined,
  fullValue: stateProps.fullValue,
  update: dispatchProps.update
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditorPage);