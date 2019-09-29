import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { UserContext } from '../App';
import { authenticateUser } from '../store/actions';
import './LoginForm.css';

const LoginForm = ({ authenticateUser, isSubmitting }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '', showMessage: false, message: 'Вы ввели неверный логин или пароль' })
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const userID = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authenticateUser(formValues);
      if (res === 'wrong_email_or_password') {
        setFormValues({...formValues, password: '', showMessage: true});
      }
    } catch (error) {
        console.log(error.message);
    }
  };
  const warning = formValues.showMessage && <div style={{ color: 'red' }} className="warning">{ formValues.message }</div>;
  if (userID) return <div className="content"><h1>Вы уже вошли на сайт как {userID}</h1></div>;

  return (
    <div className="content">
      <h1 className="content__header">Вход на сайт:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
          value={formValues.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required>
          </input>
          <label htmlFor="email">Эл. почта</label>
        </div>
        <div>
          <input onChange={ handleChange } id="password" type="password" name="password" value={formValues.password} required></input>
          <label htmlFor="password">Пароль</label>
        </div>
        { warning }
        <button type="submit" disabled={isSubmitting}>Отправить</button>
      </form>
    </div>
  )
};

const mapDispatchToProps = { authenticateUser };
const mapStateToProps = ({ loginReducer }) => loginReducer;

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
