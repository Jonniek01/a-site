import React from 'react'
import './AccSocial.css'
import {  Facebook, Instagram,  Pinterest, Whatsapp } from 'react-bootstrap-icons';
import { FaPencilAlt } from 'react-icons/fa';


function AccSocial() {
  return (
    <div className='acc-social'> 
     <ul className='acc-ul'>
    <li><a href={""}><Whatsapp /></a></li>
    <li><a href={""}><Facebook /></a></li>
    <li><a href={""}><Instagram /></a></li>
    <li><a href={""}><Pinterest /></a></li>
</ul>
<FaPencilAlt className='social-edit' />

</div>
  )
}

export default AccSocial