import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ThreeColumn: React.FC<{props: ThreeColumnProps}> = ({props}) => {
  const {image, headline, description} = props;

  return (
    <Container fluid>
      <Row>
        <Col xl={4} className="threeColumnImageBlock">
          {image}
        </Col>
        <Col xl={8}>
          <TwoColumn props={{headline, description}}></TwoColumn>
        </Col>
      </Row>
    </Container>
  )
}

export interface ThreeColumnProps {
  image: React.ReactNode,
  headline: React.ReactNode,
  description: React.ReactNode
}

export interface TwoColumnProps {
  headline: React.ReactNode,
  description: React.ReactNode
}

export const TwoColumn: React.FC<{props: TwoColumnProps}> = ({props}) => {
  const {headline, description} = props;

  return (
    <Container fluid>
      <Row>
        {headline}
      </Row>
      <Row className="separator"></Row>
      <Row>
        {description}
      </Row>
    </Container>
  )
}