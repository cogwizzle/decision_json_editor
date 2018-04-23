import React from 'react';
import v4 from 'uuid/v4';

const styles = {
  editor: {
    display: 'flex',
    flexDirection: 'column'
  },
  editorChild: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: '10px'
  },
  leaf: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  leafier: {
    display: 'flex',
    flex: 3,
    justifyContent: 'flex-end'
  },
  controls: {
    margin: '10px',
    textAlign: 'center' 
  }
};

export default class Editor extends React.Component {
  
  /**
   * Default constructor.
   *
   * @param {Object[]} props Tag properties.
   */
  constructor(props) {
    super(props);
  }

  save() {

    const { parent, link, markdown } = this.refs;
    const id = v4();
    this.props.onSave({
      ...this.props.value,
      state: [
        ...this.props.value.state,
        {
          id: id,
          parent: parent.value || null,
          slide: markdown.value,
          link: link.value || null
        }
      ]
    });

    parent.value = '';
    link.value = '';
    markdown.value = '';
  }

  /**
   * JSX based render function.
   *
   * @return {string} JSX DOM.
   */
  render() {
    const props = this.props;

    return (
      <div>
        <div className='editor' style={styles.editor}>
          <div style={styles.editorChild}><label style={styles.leaf} for='parent'>Parent:</label><input style={styles.leafier} type='text' id='parent' ref='parent' /></div>
          <div style={styles.editorChild}><label style={styles.leaf} for='link'>Link:</label><input style={styles.leafier} type='text' id='link' ref='link' /></div>
          <div style={styles.editorChild}><label style={styles.leaf} for='markdown'>Markdown:</label><textarea rows={15} style={styles.leafier} id='markdown' ref='markdown'></textarea></div>
        </div>
        <div className='controls' style={styles.controls}>
          <input type='button' value='Save' onClick={this.save.bind(this)} />
        </div>
      </div>
    );
  }
}