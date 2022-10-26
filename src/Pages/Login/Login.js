import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center my-5'>
         <Card border="info" style={{ width: '30rem' }}>
      <Card.Header className='bg-primary text-white text-center'><h4>Login Panel</h4></Card.Header>
      <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit" size="md">
        Submit
      </Button>
    </div>
    </Form>
    <hr />
    <div className="d-grid gap-2">
    <Button variant="outline-success">Sign In With Google</Button>
    <Button variant="outline-dark">Sign In With GitHub</Button>
    </div>
      </Card.Body>
      <Card.Footer className="text-muted text-center">Don't have an account? <Card.Link onClick={()=>{navigate('/signup')}}> Sign Up</Card.Link></Card.Footer>
    </Card>
    </div>
  )
}

export default Login