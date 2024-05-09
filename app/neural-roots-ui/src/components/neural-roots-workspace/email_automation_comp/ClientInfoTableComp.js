import { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Figure, Form, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function ClientInfoTableComp({clientData, setClientData}){
  
  function handleOnCheckItem(e){
    const {name, checked} = e.target;
    if(name === "all-select"){
      let tempUser = clientData.map((client) => { return { ...client, isChecked: checked}})
      setClientData(tempUser)
    }  
    else{
      let tempUser = clientData.map((client) => client.email === name ? { ...client, isChecked: checked} : client )
      setClientData(tempUser)
    }
  }
  
  return(
    <div id="collapse1">
    <Table className='table-bordered' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>
            <Form.Check name={'all-select'} onClick={handleOnCheckItem} aria-label="option 1" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
          <th>Will Pay</th>
        </tr>
      </thead>
      <tbody>
      {clientData.map((item, key) => {
        return (<tr>       
          <td> <Form.Check checked={item?.isChecked} name={item.email} onClick={handleOnCheckItem}  aria-label="option 1" /></td>
          <td>{item.first_name}</td>
          <td>{item.email}</td>
          <td>{item.country}</td>
          <td>{item.status}</td>
          <td>{item.will_pay}</td>
        </tr>)
        })}
        </tbody>
    </Table>
    </div>
  );
}

export default ClientInfoTableComp;