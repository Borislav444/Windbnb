import React from "react";
import '../styles/cards.css'
import Stays from '../stays.json'
import CardList from "./CardList";

export default function Cards(){
    const Card = Stays.map((stay, index) =>{
      return <CardList
                    key={index}
                    host ={stay.superHost}
                    title={stay.title}
                    rating={stay.rating}
                    type={stay.type}
                    beds={stay.beds}
                    image={stay.photo} 
                    maxGuests={stay.maxGuests}                
               />
    })
    return(
      <div className="card">
        <div className="Cards">
          {Card}
        </div>
    </div>  

    )
         
}
          
    
            
