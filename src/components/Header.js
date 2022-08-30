import React from 'react'
 import Logo from '../images/logo.png'
 import '../styles/header.css'
 import ModalWindow from './ModalWindow'
 

export default function Header(){
     
    
    return(
        <div>

        <div className='header'>
          <div className='headerLogo'>
             <img src={Logo} alt="logo"/>
          </div>
          <ModalWindow/>
        </div>
        <div className="cardHeader">
        <h1>Stays in Finlands</h1>
         <p>12+stays</p>
        </div>
    </div>
        
    )

    }