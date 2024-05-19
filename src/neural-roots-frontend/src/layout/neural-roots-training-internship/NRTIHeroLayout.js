import React, { useState } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../../assets/img/clients/logo.png';
import ContactUsModal from "../../components/neural-roots-training-internship/ContactUsModal";

const NRTIHeroLayout = () => {
    const [contactUsShow, setContactUsShowShow] = useState(false);
    const handleShow = () => setContactUsShowShow(true);

  return (
    <>
    <div id="training-internship-page">
        <header className="training-internship-page-header">
            <Navbar className="fixed-top" expand="lg">
            <Container className="container d-flex align-items-center">
                <a className="me-auto">
                    <img src= {LogoImg} alt="" className="img-fluid"></img>
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto training-internship-page-nav-link">
                        <Nav.Link href="#About Us">About Us</Nav.Link>
                        <Nav.Link href="#Program">Program</Nav.Link>
                        <Nav.Link href="#Program">Courses</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
        <section className="training-internship-page-hero">
            <Container className="training-internship-page-intro">
                <div className="training-internship-page-heading">
                    <h1>Launch Your AI Journey with</h1> 
                    <h1>The 10X AI ASCEND Internship Program</h1>
                </div>
                <div className="training-internship-page-subheading">
                    <h5>Gain hands-on experience at the forefront of Artificial Intelligence (AI) with Neural Roots.</h5>
                </div>
                <div className="training-internship-page-key-highlights">
                    <ul>
                        <li>Earn your Advanced AI Certification & Master Generative AI, NLP, & more on Real-World Projects </li>
                        <li>Collaborate with Experts & International Interns on Projects in Finance, Healthcare, & More</li>
                        <li>Fast-Track Your AI Career: Get Certified, Get Experience, Get Hired</li>
                    </ul>
                </div>                
                <button>GET CERTIFICATE</button>
                <button onClick={handleShow}>CONTACT US</button>
                <ContactUsModal show={contactUsShow} setShow={setContactUsShowShow}/>
            </Container>            
        </section>
    </div>  
</>
  );
}

export default NRTIHeroLayout