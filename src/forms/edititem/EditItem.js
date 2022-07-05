//PUT https://artpromo.azurewebsites.net/api/Art/${id}
import React from 'react'
import './EditItem.css'
import { useState } from 'react';
import axios from 'axios';


function EditItem({art}) {
  const initialValues = {
    "id":art.id,
      "name": art.name,
      "description": art.description,
      "artistId": art.artistId,
      "price": art.price,
      "category": art.category,
      "artImageUrl":art.artImageUrl
 
};
const url = `https://artpromo.azurewebsites.net/api/Art/${art.id}`

const [values, setValues] = useState(initialValues);
const [message, setMessage]=useState("")
const [disabled, setDisabled]=useState(false)
const [image, setImage]= useState(null)

//input change
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};

//onsubmit
const handleSubmit=(e)=>{
  e.preventDefault()
  setDisabled(true)
  
  
  
      setMessage("Form proccessing");
      if(image===null){
      //  postData(initialValues.artImageUrl)
      }
      else{
        getSecure(image)
    }
  
  
  
    }
//posting data
const postData=(urlpar)=>{
  let Obj=values;
  Obj.artImageUrl=urlpar;
  setValues(Obj)
  console.log("to be submited:", values)
  axios.put(url,values).then(
    res=>{
    setDisabled(false);
    setMessage("PRODUCT UPDATE SUCESFULL");
    alert(message)

    
    setValues(initialValues)
    window.location.reload();


  })
  .catch(err=>{
    setMessage("An error occured. Check your art details");
    console.log("error",err)
    setDisabled(false)
    alert(err.toString())
  })

}
//handling image
/*Get secure, upload ,return url then call post data*/
const getSecure=()=>{
 axios.get ('http://localhost:5001/s3Url').then(res=>{uploadImage(res.data.url)}).catch(error =>{
    setMessage("Images server error");
});

}
const uploadImage=(secureUrl)=>{
  console.log("Uploading")
  axios.put(secureUrl,image)
  .then(res=>{
    const s3url=secureUrl.split('?')[0];
  setDisabled(false);
  setImage(null)
  postData(s3url)
})
.catch(err=>{setMessage("Image upload failed")})

}



  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      
          <div className='message'>{message}</div>

      <div>
        <input onChange={handleInputChange} value={values.name} name="name" placeholder='name' type="text"></input>
        <div className='form-cat'>
          <span>Category:</span>

        <select onChange={handleInputChange} name="category" placeholder='category' type="text" required>
        <option defaultValue={values.category} >{values.category}</option>

          <option value="Drawings">Drawings</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Paintings">Paintings</option>

        </select>
        </div>


      </div>
      <div>
        <input onChange={handleInputChange} type='number' value={values.price} name='price' min={0} step={0.01} placeholder="Price"></input>
        <input onChange={(e)=>{
            setImage(e.target.files[0])
        }} type="file" placeholder='image' accept="image/*" name='image'></input>
      </div>
      <div>
      <textarea onChange={handleInputChange} value={values.description}  name="description" rows="5" placeholder='Description...' ></textarea>

      </div>
      <button style={disabled?{opacity:"0.2"}:{opacity:"1"}} disabled={disabled} className='submit' type='submit'>CONTINUE</button>
    </form>
  )
}

export default EditItem