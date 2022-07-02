import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ArtCard from '../../components/artcard/ArtCard'

//GET https://artpromo.azurewebsites.net/api/Art/category/Drawings
const url="https://artpromo.azurewebsites.net/api/Art/category/Drawings"

function Drawings() {
  const [arts,setArts] = useState(null)
  const [err,setErr]= useState(null)
  useEffect(
    ()=>{
      axios.get(url).then(res=>setArts(res.data)).catch(er=>setErr(er))
    }
  )
  return (
    <div className='Drawings'>
     <div className='heading'><h1>DRAWINGS</h1></div>
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

export default Drawings