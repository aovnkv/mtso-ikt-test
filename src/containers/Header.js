import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    const { isUserLoggedIn } = this.props.userLogin.userID;
    return (
      <div className="App-header">
        <nav className="nav">
          <div className="nav-item">
            <NavLink to="/login" className="btn-link" activeClassName="active">
              <button className="btn btn-login">{ isUserLoggedIn ? 'Выйти' : 'Войти' }</button>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/profile"
              className={ isUserLoggedIn ? 'nav-link' : 'nav-link inactive' }
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

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Header));
//export default Header;
