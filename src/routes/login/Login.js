/* POST https://artpromotion.azurewebsites.net/api/Auth/login
{
  "email": "user@example.com",
  "password": "stringst"
}
*/
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login({setLoggedIn}) {
  const initialValues = {
    email:"",
    password:""
  };
  const url = "https://artpromotion.azurewebsites.net/api/Auth/login"

  const [values, setValues] = useState(initialValues);
  const [message, setMessage]=useState("")
  const [disabled, setDisabled]=useState(false)
  const navigate=useNavigate()



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
const handleSubmit=(e)=>{
  e.preventDefault()
  setDisabled(true)
      setMessage("Form proccessing")
      axios.post(url,values).then(
        res=>{
        setDisabled(false);
        res.data.isSuccess?setUser(res.data):setMessage(res.data.message)

      })
      .catch(err=>{
        setMessage("Check your details and try again");
        setDisabled(false)
      })

    }

const setUser=(response)=>{
  
  axios.get(`https://artpromotion.azurewebsites.net/api/Artists/${response.userId}`).then(
    res=>{localStorage.setItem('user', JSON.stringify(res.data));setLoggedIn(true);navigate('/account')}
  ).catch(err=>setMessage(err))
}




  return (
    <div onSubmit={(e)=>{handleSubmit(e)}} className='log-in'>
      <form>
        <div className='message'>{message}</div>
        <div className='login-heading'><Link className='link' to='/'>ARTSITE</Link></div>
        <input onChange={handleInputChange} type={"email"} name="email" id='email' placeholder='Email'/>
       <input onChange={handleInputChange} type={"password"} name="password" id='password' placeholder='Password' autoComplete='current-passord' />
       <div></div>
       <button style={disabled?{opacity:"0.2"}:{opacity:"1"}} disabled={disabled} type='submit'>LOG IN</button>
       <p>or <Link className='link' to='/signup'>SIGN UP</Link></p>

      </form>

    </div>
  )
}

export default Login