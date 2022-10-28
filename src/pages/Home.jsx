import React from 'react';
import SearchBar from '../components/SearchBar';
import User from '../components/User';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-container">
                <SearchBar />
                <User />
            </div>
        </div>
    );
}

export default Home;
