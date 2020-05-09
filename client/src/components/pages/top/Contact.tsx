import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../../../css/topPage.css"

export const Contact: React.FC = () => {
  return (
    <Container>
      <Row className="contact">
        <ContactItem media="Mail" content="natsuume@natsuume.dev">
        </ContactItem>
      </Row>
    </Container>
  )
}

const ContactItem: React.FC<{media: string, content: string}> = ({media, content}) => {
  return (
    <Col className="contactItem">
      <p>{media}: {content}</p>
    </Col>
  )
}