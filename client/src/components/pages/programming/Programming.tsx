import React from "react";
import { Container, Row } from "react-bootstrap";
import { Topic } from "../BasePage";

export const Programming: React.FC = () => {
  return (
    <Container>
      <Row>
        <Topic topic="GitHub"></Topic>
      </Row>
      <Row>
        <Topic topic="Qiita"></Topic>
      </Row>
      <Row>
        <Topic topic="AtCoder"></Topic>
      </Row>
    </Container>
  )
}