import React from "react";
import MainCarousel from "../../layout/neural-roots-main/MainCarousel";
import AboutMain from "../../layout/neural-roots-main/AboutMain";
import ServiceMain from "../../layout/neural-roots-main/ServiceMain";
import ContactMain from "../../layout/neural-roots-main/ContactMain";
import NavbarMain from "../../layout/neural-roots-main/Navbar";
import "../../styles/MainStyle.css";


const HomeMain = ({setIsLoginClick, setIsTrainingInternshipClick}) =>{

    return(
        <React.Fragment>
            <NavbarMain setIsLoginClick={setIsLoginClick} setIsTrainingInternshipClick={setIsTrainingInternshipClick}/>
            <MainCarousel />
            <AboutMain />
            <ServiceMain />
            <ContactMain />
        </React.Fragment>
    )
}
export default HomeMain