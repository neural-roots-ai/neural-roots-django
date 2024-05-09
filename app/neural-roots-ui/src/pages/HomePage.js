import React, { useContext, useState } from "react";
import NavbarComp from "../components/neural-roots-workspace/NavbarComp";
import '../styles/workspace_styles/navbar.css';
import EmailAutomationPage from "./neural-roots-workspace/EmailAutomationPage";

const HomePage = () => {
  let [isEmailAutoClick , setIsEmailAutoClick] = useState(false)
  let [isAutoClick, setIsAutoClick] = useState(false)

    return(
      <div>
        <NavbarComp setIsEmailAutoClick={setIsEmailAutoClick} setIsAutoClick={setIsAutoClick}/>
        {isEmailAutoClick ? <EmailAutomationPage /> : null}
        {isAutoClick ? <h1>Auto</h1> : null}
      </div>
      );
};

export default HomePage

