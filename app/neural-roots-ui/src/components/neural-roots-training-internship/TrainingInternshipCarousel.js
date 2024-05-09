import Carousel from 'react-bootstrap/Carousel';
import HeroImg from "../../assets/img/clients/nr-hero-internship.png";
import { Col, Row } from 'react-bootstrap';

function TrainingInternshipCarousel() {
  return (
    <div className='training-internship-carousel'> 
    <Row>
      <Col>
      apply
      </Col>
      <Col>
      <img src= {HeroImg} alt="" className="img-fluid"></img>
      </Col>
    </Row>
    

    </div>
)}

export default TrainingInternshipCarousel;

