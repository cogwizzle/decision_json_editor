// @flow
import React from 'react';
import Add from 'react-icons/lib/md/add-circle';
import Remove from 'react-icons/lib/md/remove-circle';
import Edit from 'react-icons/lib/md/edit';
import { NavLink } from 'react-router-dom';

const styles = {
  iconSize: {
    fontSize: '30px'
  }
};

type Props = {
  addLink: string,
  editLink: string,
  removeLink: string,
  parent?: string
};

export default (props: Props) => (
  <span className='node_controls' style={styles.iconSize}>
    <NavLink to={props.addLink}><span title='Add State'><Add /></span></NavLink>
    <NavLink to={props.editLink}><span title='Edit State'><Edit /></span></NavLink>
    {(props.parent !== null) ? <NavLink to={props.removeLink}><span title='Remove State'><Remove /></span></NavLink> : []}
  </span>
);