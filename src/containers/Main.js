import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './Main.css';

const Main = () => (
  <main className="App-main">
    <Route path="/login" component={LoginForm} />
    <Route
      path="/"
      exact
      render={() => (
        <div className="content__main">
          <h1>Вы не авторизованы. Пожалуйста, войдите на сайт.</h1>
        </div>
      )}
    />
  </main>
);

export default connect()(Main);
// export default withRouter(connect()(Main));
