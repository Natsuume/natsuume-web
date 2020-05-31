import React from "react";
import { getQiitaState, QiitaArticle } from '../interface';
import { Container, Row, ListGroup, Col, Badge } from "react-bootstrap";

export const Qiita: React.FC = () => {
  const { articles } = getQiitaState.useState();

  return (
    <Container fluid>
      <Row>
        <ListGroup className="itemBlock">
          {
            articles.map((article, key) => 
              <ListGroup.Item key={key}>
                <Article article={article}></Article>
              </ListGroup.Item>
            )
          }
        </ListGroup>
      </Row>
    </Container>
  )
}

const Article: React.FC<{article: QiitaArticle}> = ({article}) => {
  const {
    title,
    url,
    tags,
    lgtmCount,
    createdDate
  } = article;

  return (
    <Container fluid>
      <Row>
        <Col xl={8}>
          <a href={url}>
            <h3>{title}</h3>
          </a>
        </Col>
        <Col>
          <Container fluid>
            <Row>
              <Col>
                <p>({createdDate})</p>
              </Col>
              <Col xs={5}>
                <Badge className="lgtmBadge">
                  LGTM: {lgtmCount}
                </Badge>
              </Col>
            </Row>
            <Row className="separator"></Row>
            <Row>
              {
                tags.map((tag, key) => 
                  <Badge pill key={key} className="qiitaTagBadge">{tag}</Badge>
                )
              }
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
