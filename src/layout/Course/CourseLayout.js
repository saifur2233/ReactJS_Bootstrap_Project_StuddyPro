import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav'

const CourseLayout = () => {
  return (
    <div>
        <Container>
        <Row>
            <Col sm={12} md={3} lg={2}>
            <LeftSideNav></LeftSideNav>
            </Col>
                <Col sm={12} md={9} lg={10}>
                    <Row>
                   <Outlet></Outlet>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CourseLayout