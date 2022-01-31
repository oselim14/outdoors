import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/search">Make a Friend</Link>
      &nbsp; | &nbsp;
      <Link to="/messages">Messages</Link>
      &nbsp; | &nbsp;
      <Link to={`/profile/${props.user._id}`}>Welcome, {props.user.name}</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}