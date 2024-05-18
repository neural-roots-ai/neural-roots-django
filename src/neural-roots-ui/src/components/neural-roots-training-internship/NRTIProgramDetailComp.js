import React from "react"
import { Row,Col, Badge, Stack, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


const NRTIProgramDetailComp = ({program_detail_obj}) => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

console.log(timeZone);
console.log(Intl.supportedValuesOf('timeZone'))
  return (
    <>
        <div id="training-internship-comp-program-details">
            <Row >
                <Col sm={4}>
                    <Image className="program-img" src={program_detail_obj.program_image} thumbnail />
                </Col>
                <Col sm={8}>
                    <div className="outcomes">
                        <h3 className="text-start" >Outcome</h3>
                        <ul className="text-start">
                            {program_detail_obj?.program_detail?.outcome_list?.map((outcome, key) => {
                                return(<li key={key}>{outcome}</li>)})}
                        </ul>
                    </div>
                    <div className="tools-skills">
                        <h3 className="text-start">Costing</h3>
                        <Stack direction="horizontal" gap={3}>
                                <strike><h5>{program_detail_obj.price} INR</h5></strike>
                                <h5> {program_detail_obj.price} INR</h5>
                        </Stack>
                        <h3 className="text-start">Tools & Skills</h3>
                        <Stack direction="horizontal" gap={2}>
                            {program_detail_obj?.program_detail?.tools?.map((tool, key) => {
                                    return(<h5 key={key}>
                                            <Badge bg="info">#{tool}</Badge>
                                            </h5>)
                                        })}
                        </Stack>
                    </div>
                </Col>
            </Row>
        </div>   
    </>
  );
}

export default NRTIProgramDetailComp


