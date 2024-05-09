import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function EmailTextAreaComp({clientData}) {

  let [emailSubject, setEmailSubject] = useState(null)
  let [emailBody, setEmailBody] = useState(null)

  function handleOnClickSent(){
    // Sent e-mail api call
  }
  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Subject"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>{setEmailSubject(e.target.value)}} as="textarea" placeholder="Subject" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Write a mail">
        <Form.Control
          onChange={(e)=>{setEmailBody(e.target.value)}}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '400px' }}
        />
      </FloatingLabel>
      <Row className='mt-3'>
        <Col>
        <Button className="width-filter-btn" variant="secondary">Attachment</Button>{' '}
        </Col>
        <Col>
        <Button className="width-filter-btn" variant="secondary">Sent</Button>{' '}
        </Col>
      </Row>
    </>
  );
}

export default EmailTextAreaComp;