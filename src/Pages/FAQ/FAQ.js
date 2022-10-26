import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className='container my-5'>
        <Accordion defaultActiveKey="0" className='border border-white'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FAQ