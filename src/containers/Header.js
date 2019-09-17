import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <nav className="nav">
          <div className="nav-item">
            <button className="btn btn-login">
              <NavLink to="/login" className="btn-link">
                Войти
              </NavLink>
            </button>
          </div>
          <div className="nav-item">
            <NavLink
              to="/profile"
              className="nav-link"
              activeClassName="active"
            >
              Профиль
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/news" className="nav-link" activeClassName="active">
              Новости
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
