import React, { useContext, useState } from "react";
import  '../../styles/workspace_styles/navbar.css';
import EmailAutomationFilterComp from "../../components/neural-roots-workspace/EmailAutomationFilter";
import EmailAutomationBodyLayout from "../../layout/neural-roots-workspace/email_automation/EmailBodyLayout";

const EmailAutomationPage = () => {
    let [clientData, setClientData] = useState([])
    

    return(
      <div>
        <h2 id="selected-tool"> Email Automation</h2>
        <EmailAutomationFilterComp setClientData={setClientData} />   
        <EmailAutomationBodyLayout clientData={clientData} setClientData={setClientData}/>     
      </div>
      );
};

export default EmailAutomationPage

