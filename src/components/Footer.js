import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/VPLogoCrop.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/pahwavishesh/" target="_blank"><img src={navIcon1} alt=""/></a>
                {/* <a href="https://www.facebook.com/vishu.net/" target="_blank"><img src={navIcon2} alt=""/></a> */}
                <a href="https://instagram.com/pahwa_vishesh?igshid=ZDdkNTZiNTM=" target="_blank"><img src={navIcon3} alt=""/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}