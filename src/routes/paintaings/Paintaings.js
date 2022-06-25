import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ArtCard from '../../components/artcard/ArtCard'

//GET https://artpromotion.azurewebsites.net/api/Art/category/Paintings
const url="https://artpromotion.azurewebsites.net/api/Art/category/Paintings"

function Paintings() {
  const [arts,setArts] = useState(null)
  const [err,setErr]= useState(null)
  useEffect(
    ()=>{
      axios.get(url).then(res=>setArts(res.data)).catch(er=>setErr(er))
    }
  )
  return (
    <div className='Paintings'>
     <div className='heading'><h1>PAINTINGS</h1></div>
      {
        arts?
          <div className='arts-container'>
            {arts.map(
            (art)=>(<ArtCard key={art.id} art={art}/>)
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
  )
}

export default Paintings