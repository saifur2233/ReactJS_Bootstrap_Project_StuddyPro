import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Container>
        <Row>
            <Col lg="9">
            <Outlet></Outlet>
            </Col>
            <Col lg="3">
            <h2>right side nav</h2>
            </Col>
        </Row>
    </Container>
    <Footer></Footer>
    </div>
  )
}

export default Main