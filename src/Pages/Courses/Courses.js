import React,{ useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/course-category')
      .then(res=> res.json())
      .then(data => setCategories(data));
    },[]);

    //console.log(categories)

  return (
    <div className='my-5'>
        <Container>
            <Row>
            <Col sm={12} md={4} lg={3}>
            <h4 className='text-warning'>All Categories</h4>
                {categories.map(category => <p 
          key={category.id}>
           <Link className='btn btn-primary' to={`/courses/${category.id}`}>{category.name}</Link>
            </p>)}
            </Col>
                <Col sm={12} md={8} lg={9}>
                <Row>
        <Col sm={12} md={6} lg={4} >
        <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={12} md={6} lg={4} >
        <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
            </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Courses