import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import HeroImg from '../../assets/images/caucasian-girl.png'
import HeroImg2 from '../../assets/images/thankful-clever-student.png'

const HeroSection = () => {
  return (
    <>
    <div className='my-3'>
      <Container className='bg-info border border-0 rounded-3'>
          <Row className='p-5 rounded'>
            <Col sm={12} md={6} lg={6}>
              <div className='p-5'>
              <h1 className='text-white'>
              The Best Online Course You'll Find
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                 <Button variant='primary'>Get Started</Button>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='p-2'>
              <img
              src={HeroImg}
              width="350"
              height="300"
              className="d-inline-block align-top"
              alt="Hero Image"
              />
              </div>
            </Col>
          </Row>
      </Container>
    </div>
    <div className='my-5'>
      <Container className='bg-warning border border-0 rounded-3'>
          <Row className='p-5 rounded'>
          <Col sm={12} md={6} lg={6}>
              <div className='p-2'>
              <img
              src={HeroImg2}
              width="350"
              height="300"
              className="d-inline-block align-top"
              alt="Hero Image"
              />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='p-5'>
              <h1 className='text-white'>
              Providing Amazing Online Courses
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                 luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                 <div className='d- flex justify-content-center'>
                 <Button className='me-3' variant='danger'>About Us</Button>
                 <Button variant='primary'>Contact Us</Button>
                 </div>
              </div>
            </Col>
           
          </Row>
      </Container>
    </div>
    </>
  )
}

export default HeroSection