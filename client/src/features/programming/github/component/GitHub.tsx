import React from "react";
import { getGitHubState, GitHubRepository } from '../interface';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { TwoColumnProps, TwoColumn } from '../../../../components/pages/common/Columns';
import "../../../../css/programming.css";

export const GitHub: React.FC = () => {
  const { repositories } = getGitHubState.useState();
  return (
    <Container fluid>
      <Row>
        <ListGroup className="itemBlock">
        {
          repositories.map((repository, key) => 
            <ListGroup.Item key={key}>
              <Repository repository={repository}></Repository>
            </ListGroup.Item>
          )
        }
        </ListGroup>
      </Row>
    </Container>
  );
}

const Repository: React.FC<{repository: GitHubRepository}> = ({repository}) => {
  const props: TwoColumnProps = {
    headline: <HeadLine repository={repository}></HeadLine>,
    description: <Description description={repository.description} updatedDate={repository.updatedDate}></Description>
  }
  return (
    <TwoColumn props={props}></TwoColumn>
  )
}

const HeadLine: React.FC<{repository: GitHubRepository}> = ({repository}) => {
  const {
    name,
    license,
    languages,
    url
  } = repository

  return (
    <Container fluid>
      <Row>
        <Col>
          <Container fluid>
            <Row>
              <Col>
                <a href={url}>
                  <h3>{repository.name}</h3>
                </a>
              </Col>
              <Col>
                {
                  license != null ? (
                    <Badge pill variant="info" className="license">
                      {license}
                    </Badge>
                  ) : null
                }
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl={4}>
          {
            languages.map((language, key) => 
            <Badge pill key={key} className="languageBadge">{language}</Badge>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}

const Description: React.FC<{description: string | null, updatedDate: string}> = ({description, updatedDate}) => {
  return (
    <Container fluid>
      <Row className="repositoryDescription">
        <Col>
          <p>{description}</p>
        </Col>
        <Col xl={4}>
          <p>最終更新:{updatedDate}</p>
        </Col>
      </Row>
    </Container>
  )
}