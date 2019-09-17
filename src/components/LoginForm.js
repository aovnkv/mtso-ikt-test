import React from 'react';
import './LoginForm.css';

const LoginForm = () => (
    <form className="form-login">
        <div className="form-login__input">
            <label htmlFor="email">Эл. почта</label>
            <input type="email" name="email"></input>
        </div>
        <div className="form-login__input">
            <label htmlFor="password">Пароль</label>
            <input type="password" name="pwd"></input>
        </div>
    </form>
);

export default LoginForm;