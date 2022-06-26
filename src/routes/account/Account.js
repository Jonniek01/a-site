

import React, { useEffect, useState } from 'react'
import AccSocial from '../../components/accsocial/AccSocial'
import AccArt from '../../components/accart/AccArt'
import axios from 'axios'
import './Account.css'
import AddItem from '../../forms/additem/AddItem'

const url="https://artpromotion.azurewebsites.net/api/Art/artist/"
function Account({user}) {
  const [arts,setArts] = useState([])
  const [err,setErr]= useState(null)
  const [addClass, setAddClass]=useState('add-none')
  useEffect(
    ()=>{
      axios.get(`${url}${user.id}`).then(res=>setArts(res.data)).catch(er=>setErr(er))
    }
  )
  return (
    <div className='account'>
      <div className='user-details'>
        <img src={user.artistImageUr} alt={user.brand} className="profile-image" ></img>
        <div className="details">
          <div className="brand">
            <span>BRAND: </span><span>{user.brand}</span>
          </div>
          <div className="description">
            <span>Description: </span><span>{user.description}</span>
          </div>
          <div className="phone">
            <span>Phone</span><span>{user.phoneNumber}</span>
          </div>
          <div className="location">
            <span>Location:</span><span>{user.location}</span>
          </div>
          <div>   <button>EDIT ACCOUNT</button></div>
        </div>
        <AccSocial/>
        
      </div>
      <div className='acc-header'>
        <h1>MY ARTS</h1> <button onClick={()=>{setAddClass('add-item')}}>ADD ITEM</button>
      </div>
      <div className="arts-container">
      {
        arts.length>0?
          <div className='arts-container'>
            {arts.map(
            (art)=>(<AccArt key={art.id} art={art}/>)
          )}
          </div>
        
        :
        <div>
          {
            err?<div style={{color:"red"}}>{err.toString()}</div>:<div>Loading...</div>
          }
        </div>
      }
    

      </div>
      <div className={addClass}>
        <div className="close-add"><p onClick={()=>{setAddClass('add-none')}} >X</p></div>
        <AddItem/>
        
      </div>
    </div>
  )
}

export default Account