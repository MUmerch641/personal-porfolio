import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    try {
      const form = e.target;
      console.log(form);
      const response = await fetch(form.action, {
        method: form.method,
      });
  
      console.log('Form submitted, waiting for response...');
  
      if (response.ok) {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
        console.log('Success response received.');
      } else {
        const errorMsg = await response.text();
        console.error("Error response:", errorMsg);
        setButtonText("Send");
        setStatus({ success: false, message: "Something went wrong. Please try again." });
        console.log('Error message:', errorMsg);
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      setButtonText("Send");
      setStatus({ success: false, message: "Error sending the message" });
    }
  };
  
  

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
                  <form
                    action="https://formsubmit.co/choudhry00641@gmail.com"
                    method="POST"
                    onSubmit={handleFormSubmit}
                  >
                    <input type="hidden" name="_next" value="https://personal-porfolio-clientu.vercel.app/" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_autoresponse" value="true" />

                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          required
                        ></textarea>
                      </Col>
                    </Row>

                    {status.message && (
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>
                          {status.message}
                        </p>
                      </Col>
                    )}

                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </form>
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
