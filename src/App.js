import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Main from './components/Main';
import LoginForm from './components/LoginForm';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/login/" component={LoginForm} />
    </Router>
  </div>
);

export default App;
