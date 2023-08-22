import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImg from '../../assets/img/clients/logo.png';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function NavbarMain({setIsLoginClick}) {

      const onClickLogin = () =>{
        setIsLoginClick(true)
    }

  return (
    <header id="header" className="fixed-top ">
      <Container className="container d-flex align-items-center">
        <a to="#hero" className="logo me-auto">
          <img src= {LogoImg} alt="" className="img-fluid"></img>
        </a>
        <Navbar id="navbar" className="navbar">
          <a className="nav-link scrollto  " href="#hero">Home</a>
          <a className="nav-link scrollto" href="#about"> About</a>
          <a className="nav-link scrollto" href="#services">Service </a>
          <a className="nav-link scrollto" href="#contact">Contact</a>
          {/* <Link  to="login" onClick={onClickLogin}>Login</Link> */}
          {/* <Link><a className="nav-link scrollto" to="#contact">Case Study</a></Link>
          <Link><a className="nav-link scrollto" to=" ">Blog</a></Link>
          <Link><a className="nav-link scrollto" to=" ">Career</a></Link> */}
        </Navbar>
      </Container>
    </header>
  );
}

export default NavbarMain;