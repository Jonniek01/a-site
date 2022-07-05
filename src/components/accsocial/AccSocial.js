import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './AccSocial.css'
import {  Facebook, Instagram,  Pinterest, Whatsapp } from 'react-bootstrap-icons';
import { FaPencilAlt } from 'react-icons/fa';
import EditSocial from '../../forms/editsocial/EditSocial';


function AccSocial({uid}) {
  const geturl= `https://artpromo.azurewebsites.net/api/Socials/${uid}`


  const [soci, setSoci]=useState('social-none')
  const [social, setSocial]=useState({
    "whatsApp": "#",
    "facebook": "#",
    "instagram": "#",
    "pintrest": "#",
    "userId": uid
  })

  useEffect(
    ()=>{
      axios.get(geturl).then(res=>{
        console.log(res)
        setSocial(res.data)
      }
      ).catch(err=>{
        console.log(err)
      })
    },[geturl]
  )
  return (
    <div className='acc-social'> 
     <ul className='acc-ul'>
    <li><a href={social.whatsApp}><Whatsapp /></a></li>
    <li><a href={social.facebook}><Facebook /></a></li>
    <li><a href={social.whatsApp}><Instagram /></a></li>
    <li><a href={social.pintrest}><Pinterest /></a></li>
</ul>
<FaPencilAlt onClick={()=>{setSoci('social-form')}} className='social-edit' />
<div className={soci}>
<div className="closeform"><span onClick={()=>{setSoci('social-none')}} >X</span></div>
<EditSocial social={social}/>

</div>

</div>
  )
}

export default AccSocial