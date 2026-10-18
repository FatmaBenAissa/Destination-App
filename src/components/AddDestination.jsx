import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
function AddDestination({destinations, setdestinations}) {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdestination, setnewdestination] = useState({
    title:"",
    description:"",
    image:"",
    price:"",
    rate:""

  })

  const handleadd=()=>{
    setdestinations([newdestination,...destinations])
  }
  return (
  <>
      <Button variant="warning" onClick={handleShow}>
        +
      </Button>
      

      <Modal show={show} onHide={handleClose} size="xl">
        <div className='mycontainer'>
        <div className='left'>
            
        <Modal.Header closeButton>
          <Modal.Title>Add Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setnewdestination({...newdestination, title:e.target.value})} />

      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setnewdestination({...newdestination, image:e.target.value})} />

      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter description"  onChange={(e)=>setnewdestination({...newdestination, description:e.target.value})}/>

      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter price" onChange={(e)=>setnewdestination({...newdestination, price:e.target.value})} />

      </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rate Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter rate" onChange={(e)=>setnewdestination({...newdestination, rate:e.target.value})}/>

      </Form.Group>
      </Form>
   

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={()=>{handleadd();alert("destination added!");handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
        </div>
        <div className='right'>
            <img src="/images/spain.jpg"/>
        </div>
        </div>
      </Modal>
    </>
  )
}

export default AddDestination