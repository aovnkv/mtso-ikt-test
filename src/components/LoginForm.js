import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { UserContext } from '../App';
import { authenticateUser } from '../store/actions';
import './LoginForm.css';


const LoginForm = ({ isFetching, error, authenticateUser }) => {

  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const userID = useContext(UserContext);

  if (userID) return <div className="content"><h1>Вы уже вошли на сайт как {userID}</h1></div>;

  return (
    <div className="content">
      <h1 className="content__header">Вход на сайт:</h1>
      <form onSubmit={ async (e) => {
        e.preventDefault();
        try {
          await authenticateUser(formValues);
        } catch (error) {
          if (error.message === 'Error: wrong_email_or_password') {
            setFormValues({...formValues, password: ''});
          } else {
            console.log(error.message);
          }
        }
      }}>
        <div>
          <input onChange={ handleChange } id="email" type="email" name="email" required></input>
          <label htmlFor="email">Эл. почта</label>
        </div>
        <div>
          <input onChange={ handleChange } id="password" type="password" name="password" required></input>
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
