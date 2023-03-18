import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/WebProj1.png";
import projImg2 from "../assets/img/WebProj2.png";
import projImg3 from "../assets/img/WebProj3.png";
import androidProjImg1 from "../assets/img/AndroidProj1.jpg";
import androidProjImg2 from "../assets/img/AndroidProj2.jpg";
import androidProjImg3 from "../assets/img/AndroidProj3.jpg";
import dsaProjImg1 from "../assets/img/DSAProj1.jpg";

export const Projects = () => {
    const projects = [
        {
            title : "Personal Portfolio",
            description: "React JS Web App",
            imgUrl: projImg1,
        },
        {
            title : "Spotify Clone",
            description: "HTML CSS JS Website",
            imgUrl: projImg2,
        },
        {
            title : "Foodie Zone",
            description: "Frontend Website",
            imgUrl: projImg3,
        }
    ]
    const androidProjects = [
        {
            title : "Foodie Zone",
            description: "Food Ordering Applicaion with Restaurant Names and Menu along with Favourite Section",
            imgUrl: androidProjImg1,
        },
        {
            title : "Book Shelf",
            description: "Books App where one can read description of Books and add them to favourites",
            imgUrl: androidProjImg2,
        },
        {
            title : "Avengers App",
            description: "App displaying various Avengers Superheroes",
            imgUrl: androidProjImg3,
        }
    ]
    const dsaProjects = [
        {
            title : "DSA Certification",
            description: "Certification of DSA in C++ from Coding Blocks",
            imgUrl: dsaProjImg1,
        }
    ]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>
                        I have done various Projects in different Domains. Some of them are shown Below.
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Android Devlopment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Problem Solving</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}

                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        androidProjects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}

                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        dsaProjects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}

                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}