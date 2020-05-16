import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Topic: React.FC<{topic: string}> = ({topic}) => {
  return (
    <Container fluid={true} className="topicBlock">
      <Row className="separatorBlock">
        <Col className="separator" xs>
        </Col>
        <Col xs>
          <h2>{topic}</h2>
        </Col>
        <Col className="separator"  xs>
        </Col>
      </Row>
    </Container>
  )
}