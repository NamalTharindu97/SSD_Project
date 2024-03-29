import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };
  return (
    <div className="nav-bar">
      <span className="logo">
        <Link className="link" to="/">
          Employee Management
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
