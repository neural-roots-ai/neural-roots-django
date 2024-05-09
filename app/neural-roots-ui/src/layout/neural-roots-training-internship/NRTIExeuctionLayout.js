import React, { useState } from "react"

import CertiProcessImg from "../../assets/img/clients/training-and-internship/execution/certificate-process-execution.png";
import DemoProcessImg from "../../assets/img/clients/training-and-internship/execution/demo-process-execution.png";
import IntakeProcessImg from "../../assets/img/clients/training-and-internship/execution/intake-process-execution.png";
import PocProcessImg from "../../assets/img/clients/training-and-internship/execution/poc-process-execution.png";
import NRITOurPartnersComp from "../../components/neural-roots-training-internship/NRITOurPartnersComp";
import SparkLogo from "../../assets/img/clients/training-and-internship/partners/spark.png";
import RazorpayLogo from "../../assets/img/clients/training-and-internship/partners/razorpay-logo.svg";
import AwsLogo from "../../assets/img/clients/training-and-internship/partners/aws-logo.png";
import LinkedInLogo from "../../assets/img/clients/training-and-internship/partners/linkedin-logo.webp";
import DigitalIndiaLogo from "../../assets/img/clients/training-and-internship/partners/digital-india-logo.png";
import AICTELogo from "../../assets/img/clients/training-and-internship/partners/aicte-logo.png";
import PaypalLogo from "../../assets/img/clients/training-and-internship/partners/paypal-logo.png";
import StartUpIndiaLogo from "../../assets/img/clients/training-and-internship/partners/start-up-india-logo.webp";


const NRTIExeuctionLayout = () => {

  return (
    <>
        <div id="training-internship-page-process">
        <section className='component--3up'>
            <div>
                <div className='container'>
                    <h1>Training & Internship Exeuction</h1>
                    <img src= {IntakeProcessImg} alt="" className="img-fluid process-img"></img>
                    <img src= {PocProcessImg} alt="" className="img-fluid process-img"></img>
                    <img src= {DemoProcessImg} alt="" className="img-fluid process-img"></img>
                    <img src= {CertiProcessImg} alt="" className="img-fluid process-img"></img>
                    
                    <h1>Our Partners</h1>
                    <div className="slide">
                      <div className="child">
                        <img className="partner-logo" src={SparkLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={RazorpayLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={AwsLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={LinkedInLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={DigitalIndiaLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={AICTELogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={StartUpIndiaLogo}></img>
                      </div>
                      <div className="child">
                        <img className="partner-logo" src={PaypalLogo}></img>
                      </div>
                      
                    </div>
                    
                </div>
                
            </div>
        </section>
        </div>  
    </>
  );
}

export default NRTIExeuctionLayout
