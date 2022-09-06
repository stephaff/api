 import React from 'react'
import { useSelector } from 'react-redux';
import User from '../user/User';
 
 function UserList({ userName }) {

    let users = useSelector(state => state.userReducer.users);

   return (
     <div className='userList'>
        {users.filter(user =>
            user.login.toLowerCase() === (userName.toLowerCase())
            ).map(user => <User key={ user.id } user={ user } />)
        }
     </div>
   )
 }
 
 export default UserList;