import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "./Menu";
import "../../../css/pageCommon.css"
import { PageContent } from "../../../types/PageContent";
import { Topic } from "./Topic";

export const BasePage: React.FC<{contents: PageContent[]}> = ({contents}) => {
  return (
    <>
      <Menu></Menu>
      <Container className="contents">
        <Row>
          <Container fluid={true}>
            {contents.map(({topic, Component}, key) => (
              <div key={key}>
                <Row>
                  <Topic topic={topic}></Topic>
                </Row>
                <Row>
                  <Component></Component>
                </Row>
              </div>
            ))}
          </Container>
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