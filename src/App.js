import { Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/Nav'
import Main from './routes/main/main'
import About from './routes/about/About'
import Account from './routes/account/Account'
import Drawings from './routes/drawings/Drawings'
import Login from './routes/login/Login'
import Paintings from './routes/paintaings/Paintaings'
import Sculpture from './routes/sculpture/Sculpture'
import SignUp from './routes/signUp/signUp'
import SignupLogin from './routes/signupLogin/SignupLogin'

//GET https://artpromotion.azurewebsites.net/api/Art

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Nav/>
          <Routes>
        <Route path='/' element={<Main/>}></Route> 
        <Route path='/about' element={<About/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/drawings' element={<Drawings/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/paintings' element={<Paintings/>}></Route>
        <Route path='/sculpture' element={<Sculpture/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signuplogin' element={<SignupLogin/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
