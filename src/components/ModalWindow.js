import React,{useState} from "react";
import '../styles/header.css'
import Stays from '../stays.json'

export default function ModalWindow(){
    const[style, setStyle] = useState('headerInputs')
    const[btn, setBtn] = useState('location')
    const[search, setSearch]=useState("searchBtn")
    const[guest,searchGuest]= useState("guests")
    const[user, setUser]= useState('user')
    const[counter, setCounter] = useState('counter')
    const[searchThearm, setSearchTearm] = useState("")
    const[adults, setAdults] = useState(0)
    const[children, setChildren] = useState(0)

     function handleClick(){
        setStyle("headerInput")
        setBtn('locations')
        setSearch('searchBtns')
        searchGuest("guest")
        setUser("users")
        setCounter('counters')
     }

     function handleSumit(){
        console.log({adults}, {children})
     }

   function plus(){
      setAdults(adults => adults  + 1)
   }
  
    function minus(){
        setAdults(adults => adults - 1)
    }

    function incement(){
        setChildren(children => children + 1)
    }

    function decrement(){
        setChildren(children => children - 1)
    }

    
    return(
        <div className={style} onMouseMove={handleClick}>
        <input 
             className={btn} 
             type="text" 
             name="location" 
             placeholder='Add location'
              onChange={(event)=>{
                setSearchTearm(event.target.value)
              }}
             />
              
        <input 
         className={guest}
         type="text"
         placeholder='Add guset'
         name="add guest"
         value={adults + children}
         onChange={(event)=>{
           setAdults(event.target.value)
           setChildren(event.target.value)
       
         }}/>
        
           <button className={search} type='search'  onClick={handleSumit}>Search</button>
           <div className={counter}>
            <div className="counterAdult">
           <div>
             <h4>Adults</h4>
             <p>Age 13 or above</p>
           </div>

            <button onClick={plus}>+</button>
            <span>{adults}</span>
            <button onClick={minus}>-</button>
            </div>
            <div className="counterChildren">
                <div>
              <h4>Children</h4>
              <p>Ages 2-12</p>

                </div>
            <button onClick={incement}>+</button>
            <span>{children}</span>
            <button onClick={decrement}>-</button>
            </div>
            </div>

       
         
            
          {Stays.filter((val)=>{
              if(searchThearm === ''){
                  return val
                } else if(val.city.toLowerCase().includes(searchThearm.toLowerCase())){
                   return val
                 }
                 
             }).map((val,key)=>{
                 return(
                     <div className={user} key={key}>
                         <p>{val.city},{val.country}</p>
                     </div>
                 )
             })
             
         }
            
           
       
          
          </div>
    )
}