import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import NRTIProgramsOverviewDetailComp from "../../components/neural-roots-training-internship/NRTIProgramsOverviewDetailComp";
import { Col, Row } from "react-bootstrap";


const NRTIProgramsOverviewLayout = () => {
    const [programDetailsList, setProgramDetailsList] = useState()

    useEffect(()=>{
        setProgramDetailsList(program_detail_obj_list)
    },[])

    const program_detail_obj_list = [
        {
            sub_title: "Work with a team of experienced professionals",
            title: "Team Bulding",
            detail: "Our experienced professionals will provide guidance and feedback throughout the program to help you develop your project. They will also help you understand the project requirements and the domain you will be working in.",
            order:1
        },
        {
            sub_title: "Collaborate with other interns",
            title: "Collaborate",
            detail: "You will have the opportunity to collaborate with other interns on projects to build your teamwork and communication skills. You will also have the chance to learn from your peers and share your knowledge with them.",
            order:2
        },
        
        {
            sub_title: "Weekly meetings with your scrum master",
            title: "Scrum Call",
            detail: "You will attend Microsoft Teams meetings to discuss the project with your mentor and team members.",
            order:3
        },
        {
            sub_title: "Work on a real-world project in your chosen domain",
            title: "Project",
            detail: "You will be paired with a mentor who will help you get started on your project. You will spend most of your time coding and developing your project, and your mentor will provide guidance and feedback to help you stay on track. The project will be in your chosen domain, such as Data Science, Computer Vision, NLP, or Generative AI.",
            order:4
        },
        {
            
            sub_title: "Work on a CV as per industry standards",
            title: "Resume preparation",
            detail: "You will receive guidance and feedback on preparing your resume to showcase your skills and experience gained during the internship.",
            order:5
        },
        {
            
            sub_title: "Get your internship certification",
            title: "Recognition",
            detail: "You will be recognized as an intern and receive a certificate of completion at the end of the program.",
            order:6
        }

    ]
    
  return (
    <>
        <div id="training-internship-program-overview-layout">
            <section className='component--3up'>
            <div>
                <Container>
                    <h1>Work Environment</h1>
                        <Row>
                        {
                            programDetailsList?.map((program_detail_obj, key) => {
                                return(
                                    <Col  sm={4} style={{ padding: '15px'}}>
                                        <NRTIProgramsOverviewDetailComp program_detail_obj={program_detail_obj}/>
                                    </Col>
                                )
                            })
                        }
                        </Row>                    
                </Container>
            </div>
        </section>
        </div>   
    </>
  );
}

export default NRTIProgramsOverviewLayout
