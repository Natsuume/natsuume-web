import React from "react";
import { Container, Row } from "react-bootstrap";
import { Topic } from "../BasePage";

export const Publications: React.FC = () => {
  return (
    <Container>
      <Row>
        <Topic topic="Book"></Topic>
      </Row>
      <Row>
        <Topic topic="Paper"></Topic>
      </Row>
    </Container>
  )
}