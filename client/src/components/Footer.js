import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1
              style={{
                textTransform: "uppercase",
                color: "white",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
              }}
            >
              Umer
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved @created by Umer choudhry</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
