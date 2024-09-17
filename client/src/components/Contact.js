import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contactImg.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xdknvvqw");

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn contImg"
                      : "contImg"
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Get In Touch</h2>
                  {state.succeeded ? (
                    <p>Thanks for joining!</p>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone No."
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            name="message"
                            placeholder="Message"
                            required
                          ></textarea>
                          <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                          />
                        </Col>
                      </Row>
                      <button type="submit" disabled={state.submitting}>
                        <span>{state.submitting ? 'Sending...' : 'Send'}</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
