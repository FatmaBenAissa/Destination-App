import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Details({destinations}) {
    const params=useParams();
    const navigate=useNavigate();
    const onedestination=destinations.filter((el)=>el.id==params.id)[0];
    console.log(onedestination)
  return (
    <div>
        <img src={onedestination.image}/>
        <h3>{onedestination.title}</h3>
        <p>{onedestination.description}</p>
        <button onClick={()=>navigate("/")}>back to home</button>
    </div>
  )
}

export default Details