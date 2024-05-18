import React from "react";
import "../styles/training-internship-style.css"
import NRTIHeroLayout from "../layout/neural-roots-training-internship/NRTIHeroLayout";
import NRTIWhatWeOfferLayout from "../layout/neural-roots-training-internship/NRTIWhatWeOfferLayout";
import NRTIExeuctionLayout from "../layout/neural-roots-training-internship/NRTIExeuctionLayout";
import NRTIFAQsLayout from "../layout/neural-roots-training-internship/NRTIFAQsLayout";
import NRTIGlobalLocationLayout from "../layout/neural-roots-training-internship/NRTIGlobalLocationLayout";
import NRTIOurProgramsLayout from "../layout/neural-roots-training-internship/NRTIOurProgramsLayout";
import NRTIProgramsOverviewLayout from "../layout/neural-roots-training-internship/NRTIProgramsOverviewLayout";

const TrainingInternshipPage = () => {

    return(
        <div id="training-internship-page-main">            
            <NRTIHeroLayout /> 
            <NRTIWhatWeOfferLayout />
            <NRTIGlobalLocationLayout />
            <NRTIExeuctionLayout />
            <NRTIOurProgramsLayout />
            <NRTIProgramsOverviewLayout />
            <NRTIFAQsLayout />
            {/* <NRTIFooterLayout /> */}
        </div>
    );
};

export default TrainingInternshipPage

