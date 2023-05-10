import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github1.svg";
import twitter from "../assets/img/twitter.svg";
import flameEthLogo from "../assets/img/flameEthLogo.png";
import "./styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className=" fContainer">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={flameEthLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end fSec">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ephraim-o-oladepo/"
                target="blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Flame-eth" target="blank">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://twitter.com/flame_eth_" target="blank">
                <img src={twitter} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
