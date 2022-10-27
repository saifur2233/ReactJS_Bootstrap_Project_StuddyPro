import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const CourseSummaryCard = ({course,  handleAddToCart}) => {
    const {_id, title, price, details, image_url, thumbnail_url, total_view, rating} = course;
  return (
    <Card>
    <Card.Img variant="top" src={thumbnail_url} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {
    details.length > 50 ?
    <p>{details.slice(0,50)+ "..."}<Link to={`/news/${_id}`}><Button size="sm" variant="warning">Read More</Button></Link></p>
    :
    <p>{details}</p>    
    }
    <h5 className='text-success'>Price: {price}</h5>
      </Card.Text>
      <div className="d-grid gap-2">
      <Button variant="primary" type='submit' onClick={() => handleAddToCart(course)} >Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CourseSummaryCard