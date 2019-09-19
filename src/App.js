import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Main />
    </Router>
  </div>
);

export default App;
