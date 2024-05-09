import React from "react"
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

const NRTIFAQsLayout = () => {

  return (
    <div id="training-internship-page-faq">
        <section className='component--3up'>
            <Container>
                <h1>FAQs?</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the duration of the internship program?</Accordion.Header>
                        <Accordion.Body>
                            The internship program is 8 weeks long.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Will I be working on real-world projects?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you will be working on a real-world project in your chosen domain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Will I be working on real-world projects?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you will be working on a real-world project in your chosen domain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Will I have access to company resources?</Accordion.Header>
                        <Accordion.Body>
                        Yes, you will have access to our data, tools, and technologies to help you develop your project.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Will there be weekly meetings with my mentor?</Accordion.Header>
                        <Accordion.Body>
                        Yes, you will have weekly meetings with your mentor to discuss your progress and any issues you may be facing.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Will there be collaboration with other interns?</Accordion.Header>
                        <Accordion.Body>
                        Yes, you will have the opportunity to collaborate with other interns on projects to build your teamwork and communication skills.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Will there be a registration fee for the internship program?</Accordion.Header>
                        <Accordion.Body>
                        Yes, there will be a registration fee. Please contact us for more information.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Will I receive an internship certificate at the end of the program?</Accordion.Header>
                        <Accordion.Body>
                        Yes, you will receive an internship certificate upon successful completion of the program.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>What are the perks for top performers?</Accordion.Header>
                        <Accordion.Body>
                        Top performers will be offered a chance to work on a project with our team and receive a recommendation letter from us.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Will I have access to the company domain email and environment?</Accordion.Header>
                        <Accordion.Body>
                        Yes, you will be provided with a company domain email and access to the company environment to work on your project.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </Container>
    </section>
    </div>
  );
}

export default NRTIFAQsLayout;
