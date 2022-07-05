import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './EditSocial.css'

function EditSocial({social}) {
  const initialValues = {
    "whatsApp": "",
    "facebook": "",
    "instagram": "",
    "pintrest": "",
    "userId": social.userId
};

const [exists, setExists]=useState(false)
const puturl = `https://artpromo.azurewebsites.net/api/Socials/${social.id}`
const posturl = `https://artpromo.azurewebsites.net/api/Socials?id=${social.userId}`
const geturl= `https://artpromo.azurewebsites.net/api/Socials/${social.userId}`

const [values, setValues] = useState(initialValues);
const [message, setMessage]=useState("")
const [disabled, setDisabled]=useState(false)

useEffect(
  ()=>{
    axios.get(geturl).then(res=>{
      console.log(res)
        setExists(true)
    }
    ).catch(err=>{
      console.log(err)
    })
  },[geturl]
)




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
      console.log(values)
      if(exists){
        putsocial()
      }
      else{
        postsocial()
      }


  }

  const putsocial=()=>{
    axios.put(puturl).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  const postsocial=()=>{
    axios.post(posturl).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }




  return (
    <form onSubmit={(e)=>{handleSubmit(e)}} >
            <div className='message'>{message}</div>

      <input onChange={handleInputChange} type="text" name='whatsapp' placeholder='Whatsapp number' ></input>
      <input onChange={handleInputChange} type="text" name='instagram' placeholder='Instagram Link' ></input>
      <input onChange={handleInputChange} type="text" name='facebook' placeholder='Facebook Link' ></input>
      <input onChange={handleInputChange} type="text" name='pinterest' placeholder='Pinterest Link' ></input>
      <button style={disabled?{opacity:"0.2"}:{opacity:"1"}} disabled={disabled} className='submit' type='submit'>CONTINUE</button>

    </form>
  )
}

export default EditSocial