import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import  ProjectCard  from './ProjectCard';
import projImg1 from '../assets/img/1banner-bg.png';
import projImg2 from '../assets/img/2.png';
import projImg3 from '../assets/img/3.png';
import projImg4 from '../assets/img/4.png';
import projImg5 from '../assets/img/5.png';
import projImg6 from '../assets/img/6.png';
import projImg7 from '../assets/img/7.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import $ from 'jquery';
import 'tilt.js';

export const Projects = () => {
  const projects1 = [
    {
      id: 1,
      title: 'KC(best project)',
      description: 'React,tailwind,ts,gsap etc',
      imgUrl: projImg7,
      link:'https://skincare.xpertspot.com/',
    },
    {
      id: 2,
      title: 'Music Player',
      description: 'Html,css,js',
      imgUrl: projImg1,
      link:'https://mumerch641.github.io/Best-music-player-/',
    },
    {
      id: 3,
      title: 'Military (kazakistan)',
      description: 'Html,css,gsap',
      imgUrl: projImg2,
      link:'https://mumerch641.github.io/military-service/index.html',
    },
    {
      id: 4,
      title: 'Golden Drops',
      description: 'Html,css,js',
      imgUrl: projImg5,
      link:'https://mumerch641.github.io/Golden-Drop/',
    },
  ];

  const projects2 = [
    {
      title: 'Tic Tac Toe',
      description: 'Html,css,js',
      imgUrl: projImg3,
      link:'https://mumerch641.github.io/Tic_tac/',
    },
    {
      id: 2,
      title: 'RPS',
      description: 'Html,css,js',
      imgUrl: projImg4,
      link:'https://mumerch641.github.io/-S-P-and-S-Game/',

     
    },
    {
      id: 3,
      title: 'Bubble game',
      description: 'Html,css,js',
      imgUrl: projImg6,
      link:' https://mumerch641.github.io/Bubble_Game/',
    },
  ];

  useEffect(() => {
    // Initialize Tilt.js for elements with class 'js-tilt'
    const tiltElements = $('.js-tilt');
    console.log('Tilt elements:', tiltElements); // Debug: Check if elements are selected

    tiltElements.tilt({
      glare: false,      // Disable glare effect
      maxGlare: 0,       // No glare effect
      perspective: 1500, // Perspective for 3D effect
      scale: 1.1,          // Scale on hover
      reset: true        // Reset effect after mouse leaves
    });

    // Cleanup on component unmount
    return () => {
      tiltElements.tilt('destroy');
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__animated animate__fadeIn' : ''}
                >
                  <h2>Projects</h2>
                  <p>My projects are more than just code and designs - they're testaments to my passion for innovation and creativity. Each one represents a unique challenge, a chance to push boundaries and explore new possibilities. From conceptualization to deployment, I pour my heart and soul into every detail, ensuring that each project is a reflection of my expertise and dedication</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects1.map((project) => (
                            <Col
                              key={project.id}
                              sm={12}
                              md={6}
                              lg={6}
                              className="mb-4"
                            >
                              <div className="js-tilt">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {projects2.map((project) => (
                            <Col
                              key={project.id}
                              sm={12}
                              md={6}
                              lg={6}
                              className="mb-4"
                            >
                              <div className="js-tilt">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};

export default Projects;
