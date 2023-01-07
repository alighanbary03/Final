import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import logo from "../logo.svg";

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
            <img src={logo} alt="Logo" />;
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
