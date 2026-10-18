import React from 'react'
import DestinationCard from './DestinationCard'

function DestinationList({destinations, text}) {

  return (
    <>
    <div className='parent'>
        {destinations.filter((el)=>el.title.toLowerCase().includes(text.toLowerCase())).map((el)=><DestinationCard el={el}/>)}
    
    </div>
 
    </>
  )
}

export default DestinationList