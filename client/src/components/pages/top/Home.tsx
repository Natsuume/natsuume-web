import React from "react";
import { Container, Row } from "react-bootstrap";
import { Topic } from "../BasePage";
import { TopPageContents } from "../../../types/top/TopPageContents"
import "../../../css/topPage.css"

export const Home: React.FC = () => {
  return (
    <Container>
      {
        TopPageContents.map(({topic, Component}, key) => (
          <div key={key}>
            <Row>
              <Topic topic={topic}></Topic>
            </Row>
            <Row>
              <Component></Component>
            </Row>
          </div>
        ))
      }
    </Container>
  )
}