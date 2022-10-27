import React,{ useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CourseImg from '../../assets/images/course/course1.jpg'
import { useLoaderData } from 'react-router-dom'
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard'
import CourseLayout from '../../layout/Course/CourseLayout';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';

const Courses = () => {
   const allcourses = useLoaderData();
   const [cart, setCart] = useState([]);

   const clearCart = () =>{
       setCart([]);
       deleteShoppingCart();
   }

   useEffect( () =>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedCourse = allcourses.find(course => course._id === id);
        if(addedCourse){
            const quantity = storedCart[id];
            addedCourse.quantity = quantity;
            savedCart.push(addedCourse);
        }
    }
    setCart(savedCart);
}, [allcourses])

const handleAddToCart = (selectedCourse) =>{
  let newCart = [];
  const exists = cart.find(course => course.id === selectedCourse._id);
  if(!exists){
    selectedCourse.quantity = 1;
      newCart = [...cart, selectedCourse];
  }
  else{
      const rest = cart.filter(course => course.id !== selectedCourse._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
  }
  
  setCart(newCart);
  addToDb(selectedCourse._id);
}

  return (
    <div className='my-5'>
        <Container>
            <Row>
            <Col sm={12} md={3} lg={2}>
            <LeftSideNav></LeftSideNav>
            </Col>
                <Col sm={12} md={9} lg={10}>
                <Row>
                {
        allcourses.map(course => <Col sm={12} md={6} lg={4}><CourseSummaryCard
           key={course._id}
          course={course}
          handleAddToCart={handleAddToCart}
        >
        </CourseSummaryCard></Col>)
      }
            </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Courses