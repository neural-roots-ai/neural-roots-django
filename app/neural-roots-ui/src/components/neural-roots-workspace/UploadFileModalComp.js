import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function UploadFileModalComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="width-filter-btn" variant="secondary" onClick={handleShow}>
        Upload File
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Select aria-label="Default select example">
                <option>Program</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </Form.Select>
            <Row className='mt-3'>
                <Col>
                    <Form.Select aria-label="Default select example">
                        <option>Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example">
                        <option>File Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                </Col>
            </Row>
            <input className='mt-3'
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={""}
                />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadFileModalComp;