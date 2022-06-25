import { Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/Nav'
import Main from './routes/main/Main'
import About from './routes/about/About'
import Account from './routes/account/Account'
import Drawings from './routes/drawings/Drawings'
import Login from './routes/login/Login'
import Paintings from './routes/paintaings/Paintaings'
import Sculpture from './routes/sculpture/Sculpture'
import SignUp from './routes/signUp/SignUp'
import SignupLogin from './routes/signupLogin/SignupLogin'
import { useEffect, useState } from 'react';

//GET https://artpromotion.azurewebsites.net/api/Art

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  useEffect(
    ()=>{
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setLoggedIn(true);
        setUser( foundUser)
      }
    },[loggedIn]
  )
  return (
    <div className="App">
      <Nav/>
      <div className='container'>

        <Routes>
        <Route path='/' element={<Main/>}></Route> 
        <Route path='/about' element={<About/>}></Route>
        <Route path='/account' element={loggedIn?<Account user={user}/>:<SignupLogin/>}></Route>
        <Route path='/drawings' element={<Drawings/>}></Route>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/paintings' element={<Paintings/>}></Route>
        <Route path='/sculpture' element={<Sculpture/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signuplogin' element={<SignupLogin/>}></Route>
      </Routes>
      </div>

    </div>
  );
}

export default App;
