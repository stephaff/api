import './SearchBar.css';

function SearchBar({ userName, setUserName }) {

    const handleChangeUser = (e) => {
        setUserName(e.target.value);
    }
    

  return (
    <div className='searchBar'>
        <input type="search" placeholder='Search a Github user' id='search-user' onChange={ handleChangeUser } value={ userName } />
    </div>
  )
}

export default SearchBar;