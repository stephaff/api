import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {

    const user = useSelector(state => state.userReducer.user)

    return (
        <div className='user'>
            <div className="user-avatar">
                <img src={ user.avatar_url } alt="avatar" />
            </div>
            <div className="user-details">
                <p className='userName'>{ user.login }</p>
                <p className='user-informations'>
                    <span>Followers : { user.followers } </span>
                    <span>Following : { user.following }</span>
                    <span>Répo(s) : { user.public_repos }</span>
                </p>
            </div>
        </div>
    );
}

export default User;
