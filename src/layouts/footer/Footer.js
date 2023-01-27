import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../Style/layouts/FooterStyles";
import logo from "../../assets/images/enamad_icon_text_color_blue_1024-768x768.png";
import logo2 from "../../assets/images/8e31f5b6ee81574e6b2850614f9aea61.jpg";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Column>
            <Heading>چرا لاکچری</Heading>
            <img src={logo} alt="Logo" />;
          </Column>
          <Column>
            <Heading>درباره ما</Heading>
            <img src={logo2} alt="Logo" />;
          </Column>
          <Column>
            <Heading>تماس با ما</Heading>
            <FooterLink href="#">نواب</FooterLink>
            <FooterLink href="#">email:alighanbary03</FooterLink>
            <FooterLink href="#">09100075844</FooterLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
