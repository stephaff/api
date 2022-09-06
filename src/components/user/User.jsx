import React from 'react';
import './User.css';

function User({ user }) {

  return (
    <div className='user'>
        <div className="avatar">
            <img src={ user.avatar_url } alt="Avatar" />
        </div>
        <div className="informations">
          <div className="name">
            <p>{ user.login }</p>
          </div>
          <div className="github-status">

          </div>
          <div className="github-repos">

          </div>
        </div>
    </div>
  )
}

export default User;