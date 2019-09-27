import React, { useContext } from 'react';
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const userID = useContext(UserContext);

    let logInOutButton = userID
      ?
      <NavLink to="/logout" className="btn-link" activeClassName="active">
        <button className="btn btn-logout">Выйти</button>
      </NavLink>
      :
      <NavLink to="/login" className="btn-link" activeClassName="active">
        <button className="btn btn-login">Войти</button>
      </NavLink>
      ;

    let profile = userID &&
      <NavLink to="/profile" className="nav-link" activeClassName="active">
        Профиль
      </NavLink>

    return (
      <div className="App-header">
        <nav className="nav">
          <div className="nav-item">
            { logInOutButton }
          </div>
          <div className="nav-item">
            { profile }
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

export default withRouter(Header);

