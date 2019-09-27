import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { logoutUser } from '../store/actions';

const Logout = ({ logoutUser }) => (

    <div className="content">
        <div className="content__header"><h1>Вы действительно хотите выйти?</h1></div>
        <div className="content__main">
            <button onClick={logoutUser} className="btn btn-logout">Да</button>
            <button onClick={() => history.push('/profile')} className="btn btn-logout">Нет</button>
        </div>
    </div>
);

const mapDispatchToProps = { logoutUser };

export default connect(null, mapDispatchToProps)(Logout);