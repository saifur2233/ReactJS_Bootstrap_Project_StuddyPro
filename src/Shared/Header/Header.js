import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
    <Container>
      <Navbar.Brand onClick={()=>{navigate('/')}}>
      <img
              src={logo}
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"><b>Courses</b></Nav.Link>
          <Nav.Link href="#pricing"><b>Faq</b></Nav.Link>
          <Nav.Link href="#pricing"><b>Blog</b></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><b>Sign In</b></Nav.Link>
          <Nav.Link href="#deets"><b>Sign Up</b></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Dark Theme"
      />
      </Form>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header