import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/prj1 (2).png';
import projImg2 from '../assets/img/prj3.png';
import projImg3 from '../assets/img/prj1 (1).png';
import projImg4 from '../assets/img/prj4.png';
import projImg5 from '../assets/img/prj5.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
    const projects = [
        {
            title: "Phone case website",
            description: "A website for selling phone cases not just selling phone case but the users get to be a remote part of the production process.",
            imgUrl: projImg1,
            link: "https://casepoint-sb89.vercel.app/", // Add the project link here
        },
        {
            title: "Banking website",
            description: "A banking website specifically for developers and big owners, because they use a specific to make transactions and it is also connected to specific email app.",
            imgUrl: projImg2,
            link: "https://new-reni.vercel.app/", // Add the project link here
        },
        {
            title: "Laundromat website",
            description: "A website that takes care laundry, by creating a easy life for the users, having their laundry picked up and done, and they monitor their laundry process from their device, then they pay the laundry service through the app.",
            imgUrl: projImg3,
            link: "https://laundromat-sable.vercel.app/", // Add the project link here
        },
        {
            title: "Shopr — Modern Fashion E-Commerce Experience",
            description: "Shopr is a responsive fashion e-commerce site built with Next.js, TypeScript, and Tailwind CSS. It features dynamic product listings from Sanity CMS, Clerk-powered authentication, a localStorage-based shopping cart and review system, responsive mobile navigation, and a sleek dark mode. Designed for performance and seamless user experience.",
            imgUrl: projImg4,
            link: "https://shopperroo-zzg5-git-master-mimosa00s-projects.vercel.app/", // Add the project link here
        },
        {
            title: "Timbu Fashion E-Commerce Store",
            description: "A modern, responsive online clothing store built with Next.js 15 and React 19, featuring dedicated Men's and Women's collections. This full-stack e-commerce platform showcases contemporary web development practices with TypeScript, Tailwind CSS, and state management via Zustand.The application delivers a seamless shopping experience with smooth animations, interactive product displays, and mobile-optimized design. Built as part of the HNG program, it demonstrates proficiency in modern React development, responsive design patterns, and e-commerce functionality.",
            imgUrl: projImg5,
            link: "https://shopperroo-zzg5-git-master-mimosa00s-projects.vercel.app/", // Add the project link here
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the projects I have worked on</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Hello welcome</Tab.Pane>
                                <Tab.Pane eventKey="third">Hello welcome</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp2} alt="Image" />
        </section>
    );
};