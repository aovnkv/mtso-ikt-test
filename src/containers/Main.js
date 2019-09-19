import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Profile from '../components/Profile';
import News from '../components/News';
import './Main.css';

class Main extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <main className="App-main">
        <Route
          path="/"
          exact
          render={() => (
            <div className="content__main">
              <h1>Вы не авторизованы. Пожалуйста, войдите на сайт.</h1>
            </div>
          )}
        />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />

      </main>
    );
  }
};

//const mapStateToProps = ( {userLoginReducer} ) => userLoginReducer;
//const mapStateToProps = ( state ) => state;
const mapDispatchToProps = ( dispatch ) => dispatch;

export default withRouter(connect(mapDispatchToProps)(Main));
