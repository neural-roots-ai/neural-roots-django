import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function UserInfoComp() {
  return (
    <>
      <Dropdown data-bs-theme="light">
        <Dropdown.Toggle variant="secondary">
        Hi! Prateek
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default UserInfoComp;