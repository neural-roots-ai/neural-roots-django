import React, { useState } from "react";
import HomeMain from "./HomeMain";
import LoginPage from "../neural-roots-workspace/LoginPage";
import TrainingInternshipPage from "../TrainingInternshipPage";


export const Main = () =>{
    let [isLoginClick, setIsLoginClick] = useState(false)
    return(
        <div>
            {
                isLoginClick ? <LoginPage /> :
                <HomeMain setIsLoginClick={setIsLoginClick}/>
            }            
        </div>
    )
}
export default Main