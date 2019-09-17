import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <nav className="nav">
          <div className="nav-item"><button className="btn btn-login"><a href="/login" className="btn-link">Войти</a></button></div>
          <div className="nav-item"><a href="/profile" className="nav-link">Профиль</a></div>
          <div className="nav-item"><a href="/news" className="nav-link">Новости</a></div>
        </nav>
      </div>
      <main className="App-main">
        <div className="content">
          <div className="content__header">Заголовок</div>
          <div className="content__main"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
