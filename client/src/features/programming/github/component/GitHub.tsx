import React from "react";
import { getGitHubState } from '../interface';
import { Container, Row, Col } from "react-bootstrap";

export const GitHub: React.FC = () => {
  const { repositories } = getGitHubState.useState();
  return (
    <Container fluid>
      {
        repositories.map((repository, key) => {
          const {
            name,
            url,
            description,
            owner,
            fork,
            languages,
            created,
            updated,
            license
          } = repository;
          return (
            <Row key={key}>
              <Container fluid>
                <Row>
                  <Col xl={4}>
                    <a href={url}>
                      <h3>{name}</h3>
                    </a>
                  </Col>
                  <Col xl={2}>
                    <p>
                    {license}
                    </p>
                  </Col>
                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
                <Row>

                </Row>
              </Container>
            </Row>
          );
        })
      }
    </Container>
  );
}