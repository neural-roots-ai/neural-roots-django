import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationMapImg from "../../assets/img/clients/training-and-internship/locations.png"
const NRTIGlobalLocationLayout = () => {

    return(
    <div id="training-internship-page-global-location">            
        <section className='component--3up'>
            <Container>
                <h1>Global AI Opportunities Await!</h1>
                
                <Row>
                    <Col>
                        <img src={LocationMapImg}></img>
                    </Col>
                    <Col>
                    <p><b>The world of AI is vast and ever-evolving, and so are the opportunities for 
                    you to carve your niche. Forget geographical limitations! We offer 
                    life-changing AI training and internship placements across the globe.</b></p>
                    
                    <Row>
                        <Col>
                            <ul>
                            <li><b>India</b></li>
                            <li><b>USA</b></li>
                            <li><b>Australia</b></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                            <li><b>New Zeland</b></li>
                            <li><b>United Kingdom</b></li>
                            <li><b>South Africa</b></li>
                        </ul>
                        </Col>
                        <Col>
                            <ul>
                            <li><b>Canada</b></li>
                            <li><b>South Africa</b></li>
                            <li><b>Indonesia</b></li>
                            </ul>
                        </Col>
                    </Row>

                    <Col>

                    </Col>
                    </Col>
                </Row>
            </Container>

        </section>
    </div>
    );
};

export default NRTIGlobalLocationLayout

