import React, { useContext } from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../App';
import LoginForm from '../components/LoginForm';
import Profile from '../components/Profile';
import News from '../components/News';
import Logout from '../components/Logout';
import './Main.css';

const Main = () => {

  const userID = useContext(UserContext);
  const heading = userID ?
  <h1>Вы уже авторизованы, как {userID}</h1>
  :
  <h1>Вы не авторизованы. Пожалуйста, войдите на сайт.</h1>
  return (<main className="App-main">
    <Route
      path="/"
      exact
      render={() => (
        <div className="content">
          <div className="content__header">
          { heading }
          </div>
        </div>
      )}
    />
    <Route path="/login" component={LoginForm} />
    <Route path="/logout" component={Logout} />
    <Route path="/profile" component={Profile} />
    <Route path="/news" component={News} />
  </main>
  );
}
export default withRouter(Main);
