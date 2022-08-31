import React, { useState } from 'react'
 import Logo from '../images/logo.png'
 import '../styles/header.css'
 import ModalWindow from './ModalWindow'
 

export default function Header(){
   const[stays, setStays] = useState(0)  
   
    return(
        <div>

        <div className='header'>
          <div className='headerLogo'>
             <img src={Logo} alt="logo"/>
          </div>
          <ModalWindow stays={stays} setStays={setStays}/>
        </div>
        <div className="cardHeader">
        <h1>Stays in Finlands</h1>
         <p>{stays} stays</p>
        </div>
    </div>
        
    )

    }