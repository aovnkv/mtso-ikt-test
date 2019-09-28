import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { UserContext } from '../App';
import { authenticateUser } from '../store/actions';
import Spinner from './Spinner';
import './LoginForm.css';


const LoginForm = ({ isFetching, error, authenticateUser }) => {

  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const userID = useContext(UserContext);

  useEffect(() => {
    if (error === 'wrong_email_or_password') setFormValues({...formValues, password: ''});
  }, [formValues])

  if (userID) return <div className="content"><h1>Вы уже вошли на сайт как {userID}</h1></div>;
  if (isFetching) return <Spinner></Spinner>

  return (
    <div className="content">
      <h1 className="content__header">Вход на сайт:</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        authenticateUser(formValues);
      }}>
        <div>
          <input onChange={ handleChange } type="email" name="email" required></input>
          <label htmlFor="email">Эл. почта</label>
        </div>
        <div>
          <input onChange={ handleChange } type="password" name="password" required></input>
          <label htmlFor="password">Пароль</label>
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
};

const mapDispatchToProps = { authenticateUser };
const mapStateToProps = ({ loginReducer }) => loginReducer;

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
