import Navbar from 'react-bootstrap/Navbar';
import { Container, NavDropdown } from 'react-bootstrap';
import LogoImg from "../../assets/img/clients/hero-img.png";
import { Link } from 'react-router-dom';



function TrainingInternshipNavbarComp() {


  return (
    <div id='ws-header'>
      <Container>
        <Navbar >
          <a to="" className="logo me-auto">
              <img src= {LogoImg} alt="" className="img-fluid"></img>Labs
          </a>  
          <Link to="">Program1</Link>
          <Link to="prog">Program2</Link>
        </Navbar>
      </Container>
      
    </div>
  );
}

export default TrainingInternshipNavbarComp;