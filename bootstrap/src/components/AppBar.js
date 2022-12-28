import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import MSS from '../Assets/MSS.jpg';

const AppBar = () => {
  return (
    <Navbar bg="dark"   variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={MSS} alt="logo" width="50" height="50"></Image>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#About" className='fw-bold'>About</Nav.Link>
            <Nav.Link href="#Achievements" className='fw-bold'>Achievements</Nav.Link>
            <Nav.Link href="#Contactus" className='fw-bold'>Contactus</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppBar