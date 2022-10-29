import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/actions';

const SearchBar = () => {

    const [searchUser, setSearchUser] = useState('');
    const dispatch = useDispatch();

    let InitialUser = 'stephaff';

    const fetchUser = (user) =>{
        fetch(`https://api.github.com/users/${ user }`)
        .then(res => res.json())
        .then(json => dispatch(getUser(json)))
    }

    useEffect(() => {
        fetchUser(InitialUser);
    }, []);

    const displayUser = () => {
        let user = searchUser;
        fetchUser(user);
    }

    return (
        <div className='searchBar'>
            <div className="searchBar-container">
                <input type="search" placeholder='Search github user' onChange={ e => setSearchUser(e.target.value) } />
                <button className='btn-search' onClick={ displayUser } >Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
