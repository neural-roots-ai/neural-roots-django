import { Figure, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function SelectedEmailTableComp({clientData}) {

  return (
    <div id="collapse1">
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {clientData?.map((item, key) => {
        if(item.isChecked){
        return (<tr>
                  <td key={key}>{item.email}</td>
                </tr>)}

      })}        
      </tbody>
    </Table>
    </div>
  );
}

export default SelectedEmailTableComp;