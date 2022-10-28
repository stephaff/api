import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/actions';

const SearchBar = () => {

    const [searchUser, setSearchUser] = useState('stephaff');
    const dispatch = useDispatch();

    const fetchUser = (searchUser) =>{
        fetch(`https://api.github.com/users/${ searchUser }`)
        .then(res => res.json())
        .then(json => dispatch(getUser(json)))
    }

    useEffect(() => {
        fetchUser(searchUser);
    }, []);

    const displayUser = () => {
        fetchUser(searchUser);
    }

    return (
        <div className='searchBar'>
            <div className="searchBar-container">
                <input type="search" placeholder='Search github user' onChange={ e => setSearchUser(e.target.value) } />
                <button className='btn-search' onClick={ displayUser }>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
