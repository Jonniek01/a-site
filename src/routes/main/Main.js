import axios from 'axios'
import ArtCard from '../../components/artcard/ArtCard'
import React, { useEffect, useState } from 'react'
//GET https://artpromotion.azurewebsites.net/api/Art
const url="https://artpromotion.azurewebsites.net/api/Art"
function Main() {
  const [arts,setArts] = useState(null)
  const [err,setErr]= useState(null)
  useEffect(
    ()=>{
      axios.get(url).then(res=>setArts(res.data)).catch(er=>setErr(er))
    }
  )
  return (
    <div className='main'>
     <div className='heading'><h1>ARTS</h1></div>
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

export default Main