import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import four from  '../Assets/four.jpg';
import five from '../Assets/five.jpg';
import three from '../Assets/three.jpg';




const Achievementcard = () => {
  return (
    <Card className=' m-3 p-3 flex-md-row ' >
      <Card.Img variant="top " src={four}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'>
        <Button variant="primary">Go somewhere</Button>
        </div>
        
      </Card.Body>
      <Card.Img variant="top " src={five} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'>
        <Button variant="primary">Go somewhere</Button>
        </div>     
      
      </Card.Body>
      <Card.Img variant="top" src={three} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'>
        <Button variant="primary">Go somewhere</Button>
        </div>
        
      </Card.Body>
      
    </Card>
  )
}

export default Achievementcard