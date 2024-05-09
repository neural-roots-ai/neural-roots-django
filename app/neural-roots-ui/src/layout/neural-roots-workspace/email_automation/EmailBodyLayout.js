import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ClientInfoTableComp from "../../../components/neural-roots-workspace/email_automation_comp/ClientInfoTableComp";
import SelectedEmailTableComp from "../../../components/neural-roots-workspace/email_automation_comp/SelectedEmailTableComp";
import EmailTextAreaComp from "../../../components/neural-roots-workspace/email_automation_comp/EmailTextAreaComp";

const EmailAutomationBodyLayout = ({clientData, setClientData}) => {
    return(
      <Container className="mt-3">
        <Row>
            <Col className="col-md-5">
            <ClientInfoTableComp clientData={clientData} setClientData={setClientData}/>
            </Col>
            <Col className="col-md-3">
            <SelectedEmailTableComp clientData={clientData}/>
            </Col>
            <Col className="col-md-4">
            <EmailTextAreaComp clientData={clientData} />
            </Col>
        </Row>   
      </Container>
      );
};

export default EmailAutomationBodyLayout

