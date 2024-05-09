import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import LogoImg from "../../assets/img/clients/hero-img.png";
import UserInfoComp from './UserInfoComp';
import { Link } from 'react-router-dom';


function NavbarComp({setIsEmailAutoClick, setIsAutoClick}) {

  const onEmailAutoClick = () => {
    setIsEmailAutoClick(true)
    setIsAutoClick(false)
  }
  const onAutoClick = () => {
    setIsAutoClick(true)
    setIsEmailAutoClick(false)
  }

  return (
    <div id='ws-header'>
      <Navbar >
        <a to="" className="logo me-auto">
            <img src= {LogoImg} alt="" className="img-fluid"></img> | Workspace
        </a>
        <div id="nav-dropdown-tools">
          <NavDropdown title="Tools" menuVariant="light">
           <Link to="" onClick={onEmailAutoClick}>Email Automation</Link>
           <Link to="" onClick={onAutoClick}>Auto</Link>
          </NavDropdown>
        </div>
        <UserInfoComp />      
      </Navbar>
    </div>
  );
}

export default NavbarComp;