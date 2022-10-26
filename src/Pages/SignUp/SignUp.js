import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] =useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        console.log(fullname, email, password, cpassword)

        if(password.length < 6){
            setError(`Your Password must be 6 character`);
            return;
        }
        if(password !== cpassword){
            setError(`Your password didn't match`);
            return;
        }

        createUser(email, password)
        .then((result)=>{
            const user = result.user;
            form.reset();
            navigate('/');
        })
        .catch((error)=>{
            console.error("Error: ", error);
        });
    }
  return (
    <div className='d-flex justify-content-center my-5'>
         <Card border="info" style={{ width: '30rem' }}>
      <Card.Header className='bg-primary text-white text-center'><h4>Registration Panel</h4></Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
        <p className='text-danger text-center'><b>{error}</b></p>
        <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" name="fullname" placeholder="Enter Fullname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="cpassword" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit" size="md">
        Submit
      </Button>
    </div>
    </Form>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        Already have an account? <Card.Link onClick={()=>{navigate('/login')}}>
             Log In</Card.Link></Card.Footer>
    </Card>
    </div>
  )
}

export default SignUp