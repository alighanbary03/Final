import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>چرا لاکچری</Heading>
          </Column>
          <Column>
            <Heading>درباره ما</Heading>
          </Column>
          <Column>
            <Heading>تماس با ما</Heading>
            <FooterLink href="#">نواب</FooterLink>
            <FooterLink href="#">email:alighanbary03</FooterLink>
            <FooterLink href="#">09100075844</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
