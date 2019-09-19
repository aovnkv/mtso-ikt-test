import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import './LoginForm.css';


const LoginForm = ({ dispatch }) => {

  const [email, changeEmail] = useState();
  const [password, changePassword] = useState();
  const emailHandleChange = e => changeEmail(e.target.value);
  const pwdHandleChange = e => changePassword(String(e.target.value));
  const tryLogin = () => dispatch(loginUser({email: email, password: password}));

  return (
    <div className="content">
      <div className="content__header">Вход на сайт:</div>
      <form onSubmit={tryLogin} className="form-login">
        <div className="form-login__input">
          <label htmlFor="email">Эл. почта</label>
          <input onChange={emailHandleChange} type="email" name="email"></input>
        </div>
        <div className="form-login__input">
          <label htmlFor="password">Пароль</label>
          <input onChange={pwdHandleChange} type="password" name="pwd"></input>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps )(LoginForm);
