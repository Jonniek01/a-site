import React, { useState } from 'react'
import './AccArt.css'
import EditItem from '../../forms/edititem/EditItem'
function AccArt({art}) {
const [edit, setEdit]=useState('edit-none')
  return (
    <div className='acc-art' >
      <img className='image' src={art.artImageUrl} alt={art.name}></img>
      <div className='details'>
        <p>{art.name}</p>
        <p>{art.description}</p>
        <p>{art.price} Ksh</p>

      </div>
      <div className="buttons">
        <button onClick={()=>{setEdit('edit-item')}} >EDIT DETAILS</button><button>REMOVE</button>
      </div>
      <div className={edit}>
      <div className="close-add"><p onClick={()=>{setEdit('edit-none')}} >X</p></div>
        <EditItem art={art}/>


      </div>

    </div>
  )
}

export default AccArt