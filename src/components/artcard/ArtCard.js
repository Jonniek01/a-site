import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Socials from '../socials/Socials'
import './ArtCard.css'
// const item_url="https://artpromo.azurewebsites.net/api/Art/"
const artist_url="https://artpromo.azurewebsites.net/api/Artists/"

function ArtCard({art}) {
  const artistId=art.artistId

  const [card_class, setCardClass]= useState('card-none')
  const [artist, setArtist] = useState(null)
  const [err, setErr]= useState('')



 const getArtist=()=>{
    axios.get(`${artist_url}${artistId}`).then(res=>setArtist(res.data)).catch(er=>setErr(er));

  }
  return (
    <div className='art-card'>
      <div 
      onClick={()=>{
        setCardClass('card-show');
        getArtist()
      }} className='image'
      >
        <img src={art.artImageUrl} alt={art.name}>
        </img>
          
      </div>
      <div className={card_class}>
        {
          artist?
          <div className='card-body'>
            <div className='card-close' onClick={()=>{setCardClass('card-none')}}><p>X</p></div>

            <div className="art-image">
              <img src={art.artImageUrl} alt={art.name}></img>
            </div>
            <Socials className="art-social" artistId={artist.id}/>
           <div className="art-details">
            <div className='art-name'>
              <span>Name: </span>
              <span>{art.name}</span>
              </div>
            <div className='art-desc'>
              <span>Description: </span><span>
              {art.description}

              </span>
              </div>
            <div className='art-price'>{art.price} Ksh</div>




           </div>
           <div className="art-artist">
            <div className='artist-brand'>
              {artist.brand}
              </div>
              <div>{artist.description}</div>
            <div className='artist-phone'>{artist.phoneNumber}</div>
            <div className='artist-location'>{artist.location}</div>
            <div className='artist-location'>{artist.address}</div>




           </div>

          </div>
          
          
          :<div>Loading...</div>
        }
      </div>
    </div>
  )
}

export default ArtCard