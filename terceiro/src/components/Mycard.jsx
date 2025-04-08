import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Mycard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.titulo}</Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>  
  )
}

export default Mycard
