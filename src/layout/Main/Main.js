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
            <Col>
            <Outlet></Outlet>
            </Col>
        </Row>
    </Container>
    <Footer></Footer>
    </div>
  )
}

export default Main