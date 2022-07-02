import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ArtCard from '../../components/artcard/ArtCard'

//GET https://artpromo.azurewebsites.net/api/Art/category/Sculpture
const url="https://artpromo.azurewebsites.net/api/Art/category/Sculpture"

function Sculpture() {
  const [arts,setArts] = useState(null)
  const [err,setErr]= useState(null)
  useEffect(
    ()=>{
      axios.get(url).then(res=>setArts(res.data)).catch(er=>setErr(er))
    }
  )
  return (
    <div className='Sculpture'>
     <div className='heading'><h1>SCULPTURE</h1></div>
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

export default Sculpture