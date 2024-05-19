import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Form, Row} from 'react-bootstrap';

function ContactUsModal({show, setShow}) {

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder='First Name'/>
                        </Form.Group>
                    </Col>
                       
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder='Last Name'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder='University'/>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col md="auto">
                        <Form.Label>Is your current degree completed?</Form.Label>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </Form.Select>
                        </Col>
                    </Row>                  
                </Form.Group>
                <br/>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder='Current Company'/>
                        </Form.Group>
                    </Col>
                       
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder='Country'/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder='Current Role'/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="number" placeholder='Work Experience (Years)'/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Any Queries?</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sent
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactUsModal;