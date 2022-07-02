import React from 'react'
import axios from 'axios';
import './EditAccount.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//PUT https://artpromotion.azurewebsites.net/api/Artists/3fa85f64-5717-4562-b3fc-2c963f66afa6

function EditAccount({user}) {
  const initialValues = {
    "id": user.id,
    "name": user.name,
    "email": user.email,
    "phoneNumber": user.phoneNumber,
    "description": user.description,
    "brand": user.brand,
    "location": user.location,
    "address": user.address,
    "artistImageUrl": user.artistImageUrl
};
const url = ` https://artpromotion.azurewebsites.net/api/Artists/${user.id}`

const [values, setValues] = useState(initialValues);
const [message, setMessage]=useState("")
const [disabled, setDisabled]=useState(false)
const [image, setImage]= useState(null)

const navigate=useNavigate()




//input change
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
setMessage("Form proccessing");
getSecure()
  }
  
  //handling image
/*Get secure, upload ,return url then call post data*/
const getSecure=()=>{
  axios.get ('http://localhost:5001/s3Url').then(res=>{uploadImage(res.data.url)}).catch(error =>{
     setMessage("Images server error");
 });
 
 }
 const uploadImage=(secureUrl)=>{
  axios.put(secureUrl,image)
  .then(res=>{
    const s3url=secureUrl.split('?')[0];
  setDisabled(false);
  setImage(null)
  putData(s3url)
})
.catch(err=>{setMessage("Image upload failed")})

}

//posting data
const putData=(s3url)=>{
  let Obj=values;
  Obj.artistImageUrl=s3url;
  setValues(Obj)
  console.log("Update:", values)
  axios.put(url,values).then(
    res=>{
    setDisabled(false);
    setMessage("PRODUCT ADDED SUCCESFULLY");
    setValues(initialValues)

  })
  .catch(err=>{
    setMessage("An error occured. Check your details");
    console.log("error",err)
    setDisabled(false)
  })

}


  return (

    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <h2>UPDATE ACCOUNT</h2>
      <div>
        <input onChange={handleInputChange} value={values.name} name='name' type="text" placeholder="Name" ></input>
        <input onChange={handleInputChange} value={values.brand} name='brand' type="text" placeholder="Brand" ></input>
      </div>
      <div>
      <input onChange={handleInputChange} value={values.email} name='email'  type="email" placeholder="Email" ></input>
      <input onChange={handleInputChange} value={values.phoneNumber}  name='phone'  type="text" placeholder="Phone:+254..." ></input>

      </div>
      <div>
      <input onChange={handleInputChange} value={values.location} name='location' type="text" placeholder="Location Name" ></input>
      <input onChange={handleInputChange} value={values.address} name='Address' type="text" placeholder="Address" ></input>

      </div>
      <div>
        <span>
          <span>ProfileImage :</span>
          <input 
                onChange={(e)=>{
                  setImage(e.target.files[0])
                }} type="file" placeholder='image' accept="image/*" name='image'></input> 

        </span>


      </div>
      <div>
      <textarea onChange={handleInputChange} value={values.description}  name="description" rows="5" placeholder='Description...' ></textarea>
          </div>

      <button  style={disabled?{opacity:"0.2"}:{opacity:"1"}} disabled={disabled}  className='submit' type='submit'>UPDATE</button>


    </form>

  )
}

export default EditAccount
