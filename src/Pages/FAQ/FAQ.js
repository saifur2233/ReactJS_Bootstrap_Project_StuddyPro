import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className='container my-5'>
      <div className='mb-4 text-center'>
        <h2 className='text-primary'>Frequently Asked Questions</h2>
        <p>Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
        </p>
      </div>
        <Accordion defaultActiveKey="0" className='border border-white'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I register and join Studdy?</Accordion.Header>
        <Accordion.Body>
        <p>
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the mainstay courses at Studdy?</Accordion.Header>
        <Accordion.Body>
        <p>
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I register and join Studdy?</Accordion.Header>
        <Accordion.Body>
        <p>
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What payment methods are available?</Accordion.Header>
        <Accordion.Body>
        <p>
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I select multiple courses?</Accordion.Header>
        <Accordion.Body>
          <p>
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          Integer suscipit justo vel iaculis scelerisque. Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FAQ