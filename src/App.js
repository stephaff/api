import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { getUsers } from "./redux/actions";


function App() {

  const dispatch = useDispatch();
  

  useEffect( () => {

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      dispatch(getUsers(data))
    })

  }, [])
  

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
