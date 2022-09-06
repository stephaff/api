
import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import UserList from '../../components/userList/UserList';

function Home() {

  const [userName, setUserName] = useState('');

  return (
    <div className='home'>
      <SearchBar userName={ userName } setUserName={ setUserName } />
      <UserList userName={ userName } />
    </div>
  )
}

export default Home;