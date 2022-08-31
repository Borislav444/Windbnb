import React from "react";
import '../styles/cards.css'
import { FaStar } from 'react-icons/fa';
export default function CardList(props){
    const style={
       color:"red"
    }
    return(
        
    <div className="cardList">
         <img src={props.image} alt="img"/>
        <div className="cardTitle">
          {props.host === true && <button className="cardListBtn">SUPER HOST</button>}
         {props.beds > null ? <p>{props.type}.{props.beds} beds</p> : <p>{props.type}</p>}
          <span><FaStar style={style}/>{props.rating}</span>
        </div>
          <h2>{props.title}</h2> 
          <p>The max number of guests: {props.maxGuests}</p>
          
    </div>
    
        
       

    )
}