import React from 'react'
import './AccArt.css'
function AccArt({art}) {
  return (
    <div className='acc-art' >
      <img className='image' src={art.artImageUrl} alt={art.name}></img>
      <div className='details'>
        <p>{art.name}</p>
        <p>{art.description}</p>
        <p>{art.price} Ksh</p>

      </div>
      <div className="buttons">
        <button>EDIT DETAILS</button><button>REMOVE</button>
      </div>

    </div>
  )
}

export default AccArt