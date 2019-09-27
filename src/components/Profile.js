import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import UserNotFound from './UserNotFound';
import { UserContext } from '../App';
import { getUserProfile } from '../store/actions';
import './Profile.css';

const Profile = ({ userData, isFetching, error, getUserProfile }) => {
    const userID = useContext(UserContext);
    const isUserNotFound = error === 'user_not_found';

    useEffect(() => {
        getUserProfile(userID);
    },[userID, getUserProfile]);

    const icons = userData.social.map(
        icon => (
    <li key={icon.label} className={icon.label}>
        <a href={icon.link}>
        </a>
    </li>
        )
    );

    if (isFetching) return <Spinner></Spinner>;
    if (isUserNotFound) return <UserNotFound></UserNotFound>;

    return(
        <div className="content">
            <h1 className="content__header">Профиль</h1>
            <div className="content__main profile">
                <p><span>Город: </span>{userData.city}</p>

                <h2>Знание языков:</h2>
                <ul>
                    <li>+ {userData.languages[0]}</li>
                    <li>+ {userData.languages[1]}</li>
                </ul>

                <h2>Ссылки:</h2>
                <ul className="socials">
                {icons}
                </ul>
            </div>
        </div>
    );
};

const mapDispatchToProps = { getUserProfile };
const mapStateToProps = ({ userProfileReducer }) => userProfileReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Profile);