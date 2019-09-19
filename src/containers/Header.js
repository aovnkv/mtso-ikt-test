import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {


  render() {
    const { userID } = this.props;
    return (
      <div className="App-header">
        <nav className="nav">
          <div className="nav-item">
            <NavLink to="/login" className="btn-link" activeClassName="active">
              <button className="btn btn-login">{ userID ? 'Выйти' : 'Войти' }</button>
            </NavLink>
          </div>
          <div style={ userID ? {} : {'display': 'none' }} className="nav-item">
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

const mapStateToProps = (state) => {
  const { userID } = state.loginReducer;
  return { userID };
};

export default withRouter(connect(mapStateToProps)(Header));

