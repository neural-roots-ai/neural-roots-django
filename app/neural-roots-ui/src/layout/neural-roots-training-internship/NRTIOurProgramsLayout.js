import React, { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NRTIProgramDetailComp from "../../components/neural-roots-training-internship/NRTIProgramDetailComp";
import GenAIImg from "../../assets/img/clients/training-and-internship/program/gen-ai.png"
import CVImg from "../../assets/img/clients/training-and-internship/program/computer-vision.png"
import NLPImg from "../../assets/img/clients/training-and-internship/program/nlp.png"
import DAImg from "../../assets/img/clients/training-and-internship/program/data-analytics.png"
import DEImg from "../../assets/img/clients/training-and-internship/program/data-engineering.png"

const NRTIOurProgramsLayout = () => {
    
    const [programDetailList, setProgramDetailsList] = useState([])   

    useEffect(() => {
        setProgramDetailsList(program_details_obj)
        }, []);

        const program_details_obj = [
            {
                program_name:'Generative AI Training and Internship',
                tab_name: 'Generative AI',
                program_image: GenAIImg,
                event_key: 'gen-ai',
                default_tab: true,
                price: 1500,
                discount:50, 
                program_detail:{
                    outcome_list:[
                        'Hands-on experience with computer vision techniques',
                        'Developed a computer vision system to automatically detect traffic violations',
                        'Analyzed traffic flow patterns using computer vision for congestion detection and optimization',
                        'Implemented object detection to track inventory levels and manage stock in warehouses',
                        'Developed a strong portfolio of your computer vision work to showcase your skills to potential employers'
                    ],
                    tools:[
                        'python', 'sklearn', 'yolo','ml'
                    ]
                }
                
            },
            {
                program_name:'Computer Vision Internship',
                tab_name: 'Computer Vision',
                program_image: CVImg,
                event_key: 'cv',
                default_tab: false,
                price: 1500,
                discount:50,
                program_detail:{
                    outcome_list:[
                        'Hands-on experience with computer vision techniques',
                        'Developed a computer vision system to automatically detect traffic violations',
                        'Analyzed traffic flow patterns using computer vision for congestion detection and optimization',
                        'Implemented object detection to track inventory levels and manage stock in warehouses',
                        'Developed a strong portfolio of your computer vision work to showcase your skills to potential employers'
                    ],
                    tools:[
                        'python', 'sklearn', 'yolo'
                    ]
                }
            },
            {
                program_name:'NLP Internship',
                tab_name: 'NLP',
                program_image: NLPImg,
                event_key: 'nlp',
                default_tab: false,
                price: 1500,
                discount:50,
                program_detail:{
                    outcome_list:[
                        'Developing sentiment analysis models to understand customer reviews and feedback.',
                        'Experience using popular NLP libraries like spaCy, NLTK, TensorFlow, or PyTorch.',
                        'Building search engines that can handle complex queries and retrieve the most relevant information.',
                        'Extracting text and structured information (tables, forms) from PDF documents using NLP techniques.',
                        'Developed a strong portfolio of your computer vision work to showcase your skills to potential employers'
                    ],
                    tools:[
                        'python', 'sklearn', 'yolo'
                    ]
                }
            },
            {
                program_name:'Data Analyitcs Internship',
                tab_name: 'Data Analtics',
                program_image: DAImg,
                event_key: 'da',
                default_tab: false,
                price: 1500,
                discount:50,
                program_detail:{
                    outcome_list:[
                        'Identified key business questions and formulated data-driven solutions.',
                        'Created compelling visualizations to communicate insights effectively by using Power BI',
                        'Analyzed traffic flow patterns using computer vision for congestion detection and optimization',
                        'Applied statistical methods to draw meaningful conclusions from data',
                        'Effectively cleaned and prepared raw data for analysis.'
                    ],
                    tools:[
                        'python', 'sklearn', 'yolo'
                    ]
                }
            },
            {
                program_name:'Data Engineer Internship',
                tab_name: 'Data Engineering',
                program_image: DEImg,
                event_key: 'de',
                default_tab: false,
                price: 1500,
                discount:50,
                program_detail:{
                    outcome_list:[
                        'Built automated data pipelines (Apache NiFi) for data movement & transformation.',
                        'Leveled-up querying & managing SQL & NoSQL databases.',
                        'Ensured data quality with checks & cleansing techniques. ',
                        'Optimized data storage & retrieval with data models',
                        'Gained experience with big data frameworks (e.g., Apache Spark, Hadoop) to handle large datasets efficiently.'
                    ],
                    tools:[
                        'python', 'sklearn', 'yolo'
                    ]
                }
            }
        ]

  return (
    <>
        <div id="training-internship-page-our-program">
            <section className='component--3up'>
                <Container>
                    <h1>Our Programs</h1>
                        <div className="tab1">
                            <Tabs
                            defaultActiveKey={programDetailList?.filter((item) => item.default_tab == true)[0]?.event_key}
                            id={programDetailList?.filter((item) => item.default_tab == true)[0]?.event_key}
                            className="mb-3"
                            justify
                            >                        
                            {programDetailList?.map((program_detail, key) => {
                                return (
                                <Tab key={key} eventKey={program_detail.event_key} title={program_detail.tab_name}>
                                    <h2 className="program-title">{program_detail.program_name.toUpperCase()}</h2>
                                    <div >
                                    <NRTIProgramDetailComp program_detail_obj = {program_detail} />
                                    </div>                                
                                </Tab>)
                            })}
                            </Tabs>
                        </div>
                           
                </Container>             
            </section>
        </div>   
    </>
  );
}

export default NRTIOurProgramsLayout


