import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import firebaseApp from '../../../config/firebaseApp';

import defaultAvatar from '../../../assets/images/defaults/default_avatar.png';

const UserActions = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('@user')));

  // useEffect(() => {
  //   getUserFromStorage();
  // }, [])

  // const getUserFromStorage = () => {
  //   return setUser(localStorage.getItem('@user'));
  // }

  const signOut = () => {
    localStorage.clear();
    firebaseApp.auth().signOut();
    return history.push('/login');
  }

  return (
    <NavItem tag={Dropdown} caret toggle={() => setVisible(!visible)}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={user.profilePhoto || defaultAvatar}
          alt="Foto do usuário"
        />{" "}
        <span className="d-none d-md-inline-block">{user.firstName} {user.lastName}</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible}>
        <DropdownItem tag={Link} to="user-profile">
          <i className="material-icons">&#xE7FD;</i> Perfil
          </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => signOut()} className="text-danger">
          <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
      </Collapse>
    </NavItem>
  );
}

export default UserActions;