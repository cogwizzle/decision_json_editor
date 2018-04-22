import React from 'react';
import Add from 'react-icons/lib/md/add-circle';
import Remove from 'react-icons/lib/md/remove-circle';
import Edit from 'react-icons/lib/md/edit';
import { NavLink } from 'react-router-dom';

export default props => (
  <span className='node_controls'>
    <NavLink to={props.addLink}><Add /></NavLink>
    <NavLink to={props.editLink}><Edit /></NavLink>
    <NavLink to={props.removeLink}><Remove /></NavLink>
  </span>
);