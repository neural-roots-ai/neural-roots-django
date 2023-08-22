import "../../styles/MainStyle.css";
import "../../styles/LoginStyle.css";
import React, { useState } from "react";
import NavbarMain from "../../layout/neural-roots-main/Navbar";
import LoginComp from "../../components/neural-roots-workspace/LoginComp";
import HomeMain from "./HomeMain";
import LoginPage from "../neural-roots-workspace/LoginPage";

export const Main = () =>{
    let [isLoginClick, setIsLoginClick] = useState(false)
    
    return(
        <div> 
            {isLoginClick ? <LoginPage /> : <HomeMain setIsLoginClick={setIsLoginClick} />}
        </div>
    )
}
export default Main