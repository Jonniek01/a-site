import React, { useState } from 'react'
import './AccArt.css'
import axios from 'axios'
import EditItem from '../../forms/edititem/EditItem'

//Delete https://artpromo.azurewebsites.net/api/Art/
function AccArt({art}) {
const [edit, setEdit]=useState('edit-none')
const url=`https://artpromo.azurewebsites.net/api/Art/${art.id}`


  const remove=()=>{
    axios.delete(url).then(res=>{
      alert("Item deleted sucesfully")
      window.location.reload();

      console.log(res)

    })
    .catch(err=>{
      console.log(err)
      alert("An error occured, please try again")
      window.location.reload();


    })
  }
  return (
    <div className='acc-art' >
      <img className='image' src={art.artImageUrl} alt={art.name}></img>
      <div className='details'>
        <p>{art.name}</p>
        <p>{art.description}</p>
        <p>{art.price} Ksh</p>

      </div>
      <div className="buttons">
        <button onClick={()=>{setEdit('edit-item')}} >EDIT DETAILS</button><button onClick={()=>remove(url)} >REMOVE</button>
      </div>
      <div className={edit}>
      <div className="close-edit"><p onClick={()=>{setEdit('edit-none')}} >X</p></div>
        <EditItem art={art}/>


      </div>

    </div>
  )
}

export default AccArt