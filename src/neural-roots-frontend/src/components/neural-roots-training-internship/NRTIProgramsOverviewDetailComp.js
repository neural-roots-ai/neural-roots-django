import React from "react"
import { Card } from "react-bootstrap";


const NRTIProgramsOverviewDetailComp = ({program_detail_obj}) => {

  return (
    <>
        <div id="training-internship-program-detail-comp">
            <Card border="secondary" style={{ width: '25rem', height:'16rem' }}>
                <Card.Header>{program_detail_obj.title}</Card.Header>
                <Card.Body>
                <Card.Title>{program_detail_obj.sub_title}</Card.Title>
                <Card.Text>
                    {program_detail_obj.detail}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>   
    </>
  );
}

export default NRTIProgramsOverviewDetailComp
