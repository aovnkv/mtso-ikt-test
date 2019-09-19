import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => (

  <div className="content">
    <div className="content__header">Вход на сайт:</div>
    <form onSubmit={ props.onSubmit } className="form-login">
      <div className="form-login__input">
        <label htmlFor="email">Эл. почта</label>
        <input type="email" name="email"></input>
      </div>
      <div className="form-login__input">
        <label htmlFor="password">Пароль</label>
        <input type="password" name="pwd"></input>
      </div>
      <input type="submit" value="Отправить"></input>
    </form>
  </div>

);

export default LoginForm;
