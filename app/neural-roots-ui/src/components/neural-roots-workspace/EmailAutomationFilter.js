import { Form, Row, Col, Button, Container} from "react-bootstrap";
import UploadFileModalComp from "./UploadFileModalComp";
import { useEffect, useState } from "react";

function EmailAutomationFilterComp({setClientData}) {
    let [fileList, setFileList] = useState([])
    let [country, setCountry] = useState(null)
    let [status, setStatus] = useState(null)
    let [willPay, setWillPay] = useState(null)
    let [program, setProgram] = useState(null)

    let file_data = [
        {
          "file_id": 1,
          "file_name": "abc.csv",
          "is_active": true
        },
        {
            "file_id": 2,
            "file_name": "xyz.csv",
            "is_active": true
          },
          {
            "file_id": 3,
            "file_name": "jkl.csv",
            "is_active": false
          }
    ]

    useEffect(() => {
        setFileList(file_data)
    },[])

    let data = [
        {
          "first_name": "ptk",
          "email": "ptk@gmail.com",
          "country": "IN",
          "status": "N",
          "will_pay": "Yes"
        },
        {
          "first_name": "sahu",
          "email": "ptk@outlook.com",
          "country": "UK",
          "status": "E",
          "will_pay": "Yes"
        }
]


    const onClickFilter = () => {
        // Call Filter API
        setClientData(data)
    }

    function handleOnClickClear(){
        
    }

  
return(
    <Container className="" on>        
        <Row>    
            <Col >
                    <UploadFileModalComp />
            </Col>       
            <Col  >
                <Form.Select title="file" onChange={(e)=>{console.log(e.target.value)}} className="width-filter-dropdown" >
                    <option>File</option>
                    {
                        fileList?.map((item, key) => {
                            return(
                                    <option value={item?.file_id}>{item.file_name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Col>
            
            <Col  >
            <Form.Select title="file" onChange={(e)=>{console.log(e.target.value)}} className="width-filter-dropdown" >
                    <option>Country</option>
                    {
                        fileList?.map((item, key) => {
                            return(
                                    <option value={item?.file_id}>{item.file_name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Col>
            <Col  >
                <Form.Select title="file" onChange={(e)=>{console.log(e.target.value)}} className="width-filter-dropdown" >
                    <option>Will Pay</option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Form.Select>
            </Col>
            <Col  >
                <Form.Select title="file" onChange={(e)=>{console.log(e.target.value)}} className="width-filter-dropdown" >
                    <option>Status</option>
                    {
                        fileList?.map((item, key) => {
                            return(
                                    <option value={item?.file_id}>{item.file_name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Col>
            <Col  >
                <Form.Select title="file" onChange={(e)=>{console.log(e.target.value)}} className="width-filter-dropdown" >
                    <option>Program</option>
                    {
                        fileList?.map((item, key) => {
                            return(
                                    <option value={item?.file_id}>{item.file_name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Col>
            <Col  >
                <Button onClick={onClickFilter} className="width-filter-btn" variant="secondary">Filter</Button>{' '}
            </Col>
            <Col  >
                <Button className="width-filter-btn" variant="secondary">Clear</Button>{' '}
            </Col>
            
        </Row>
    </Container>
);
}

export default EmailAutomationFilterComp