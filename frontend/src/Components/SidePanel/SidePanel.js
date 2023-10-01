import React from 'react';
import './SidePanel.css';
import { Link, useLocation } from 'react-router-dom';

const SidePanel = () => {
  const location = useLocation();
  return (
    <div className="SidePanel-Container">
      <div className="SideBar">
        <ul>
          <Link to="/dash">
            <li className={location.pathname === '/dash' ? 'active' : ''}>
              Dashboard
            </li>
          </Link>

          <Link to="/add">
            <li className={location.pathname === '/add' ? 'active' : ''}>
              Employee ADD
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
