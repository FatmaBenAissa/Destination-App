import React from 'react'
import AddDestination from './AddDestination'
import { Link } from 'react-router-dom'




function Navbarr({destinations,  setdestinations, settext}) {
  return (
    <div className="mynav">
      <div className="logo">
        <img src="/images/icon.png" />
        <h3>
          Destination<span>App</span>
        </h3>
  
      </div>
      <input type="text" placeholder="search food" style={{marginRight:"30px"}}  onChange={(e)=>settext(e.target.value)} />
     <AddDestination  destinations={destinations} setdestinations={setdestinations} />
    <Link to="/" style={{textDecoration:"none", color:"black", marginLeft:"10px"}}>Destinations</Link>
     <Link to="/contact" style={{textDecoration:"none", color:"black", marginLeft:"10px"}}>contact</Link>
      <Link to="/about" style={{textDecoration:"none", color:"black", marginLeft:"10px"}}>about</Link>
         
    </div>
  )
}

export default Navbarr