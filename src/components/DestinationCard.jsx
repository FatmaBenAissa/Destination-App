import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function DestinationCard({el}) {
  return (

     <Card style={{ width: '18rem', margin:"5px" }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
       {el.description}
        </Card.Text>
        <Link to={`/details/${el.id}`}>view details </Link>
     
        
      </Card.Body>
    </Card>

 
  )
}

export default DestinationCard