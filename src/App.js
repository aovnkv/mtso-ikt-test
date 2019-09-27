import React, { createContext } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './history';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';

export const UserContext = createContext({ userID: undefined });
const mapStateToProps = ({ loginReducer }) => loginReducer;

const App = ({ userID } ) => {
  return (
    <div className="App">
      <Router history={ history }>
        <UserContext.Provider value={ userID }>
          <Header />
          <Main />
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default connect(mapStateToProps)(App);