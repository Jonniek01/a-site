import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const initialValues = {
      "name": "",
      "email": "",
      "phoneNumber": "",
      "description": "",
      "brand": "",
      "location": "",
      "address": "",
      "password": "",
      "cpassword":""
  };
  const url = "https://artpromotion.azurewebsites.net/api/Auth/register"

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
  if(values.cpassword!==values.password){
    setMessage("Password confirmation failed, try again")
    setDisabled(false)



  }
  else{

      setMessage("Form proccessing");
     delete values.cpassword;
      console.log(values)
      axios.post(url,values).then(
        res=>{console.log("response", res.data);
        setDisabled(false);
        if(res.data.isSuccess){
          setMessage(res.data.message);
          alert("SIGNUP SUCCESFUL LOG IN TO CONTINUE")
          navigate('/login')
        }
        else{
          setMessage(res.data.errors.toString())

        }

      })
      .catch(err=>{
        setMessage("NO FIELD SHOULD BE EMPTY");
        console.log("error",err)
        setDisabled(false)
      })
    }


    }


  return (
    <div className='sign-up'>
    <div className='message'>{message}</div>

      <div className='sign-content'>

      <Link to="/" className='signup-head'>ARTSITE</Link>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div>
          <input onChange={handleInputChange} name='name' type="text" placeholder="Name" ></input>
          <input onChange={handleInputChange} name='brand' type="text" placeholder="Brand" ></input>
        </div>
        <div>
        <input onChange={handleInputChange} name='email' type="email" placeholder="Email" ></input>
        <input onChange={handleInputChange} name='phoneNumber' type="text" placeholder="Phone:+254..." ></input>

        </div>
        <div>
        <input onChange={handleInputChange} name='location' type="text" placeholder="Location Name" ></input>
        <input onChange={handleInputChange} name='address' type="text" placeholder="Address" ></input>

        </div>
        <div>
        <textarea onChange={handleInputChange} id="description" name="description" rows="5" placeholder='Description...' ></textarea>
            </div>
        <div>
        <input onChange={handleInputChange} name='password' type="password" placeholder="Password" ></input>
        <input onChange={handleInputChange} name='cpassword' type="password" placeholder="Confirm Password" ></input>

        </div>
        <button style={disabled?{opacity:"0.2"}:{opacity:"1"}} disabled={disabled} className='submit' type='submit'>SIGN UP</button>


      </form>
      <div>or <Link  to="/login" >LOG IN</Link></div>
      </div>


    </div>
  )
}

export default SignUp