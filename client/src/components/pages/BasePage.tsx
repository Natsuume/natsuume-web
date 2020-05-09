import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "./Menu";
import "../../css/pageCommon.css"

export const BasePage: React.FC<{children: React.ReactNode | React.ReactNode[]}> = ({children}) => {
  return (
    <>
      <Menu></Menu>
      <Container className="contents">
        <Row>
          {children}
        </Row>
        <Row>
          <Col>
            <p className="copyright">
              Copyright © 2020 natsuume All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const Topic: React.FC<{topic: string}> = ({topic}) => {
  return (
    <Container className="topicBlock">
      <Row className="separatorBlock">
        <Col className="separator">
        </Col>
        <Col>
          <h2>{topic}</h2>
        </Col>
        <Col className="separator">
        </Col>
      </Row>
    </Container>
  )
}