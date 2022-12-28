import React from 'react';
import Container from 'react-bootstrap/esm/Container';
// import{col ,Row} from 'react-bootstrap';
import one from '../Assets/one.jpg';
import two from '../Assets/two.jpg';
import three from '../Assets/three.jpg';
import four from '../Assets/four.jpg';
import five from '../Assets/five.jpg';
import six from '../Assets/six.jpg';

import Carousel from 'react-bootstrap/Carousel';


const Banar = () => {
  return (
    <Container className='justify-content-center align-item-center'>
        
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>School plantation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>plantation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>plantation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={four}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>plantation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={five}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>plantation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={six}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>plantation</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='justify-content-center text-center display-5'>Time to Talk Befriending</div>
       <p className='justify-content-center'>Brighton and Hove Impetus is an independent charity which works to improve the quality of life for vulnerable adults across Brighton and Hove. They support service users in making positive life choices and improving their wellbeing.</p>
    </Container>
  )
}

export default Banar