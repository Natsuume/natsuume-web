import React from "react";
import { getPapersState, PaperInfo } from "../interface";
import { Container, Row, Col } from 'react-bootstrap';
import { TwoColumn, TwoColumnProps } from '../../../../components/pages/common/Columns';

export const Papers: React.FC = () => {
  const { papers } = getPapersState.useState();

  return (
    <Container fluid>
      {
        papers.map((paper, key) => 
          <PaperColumn paper={paper} key={key}></PaperColumn>
        )
      }
    </Container>
  )
}

const PaperColumn: React.FC<{paper: PaperInfo}> = ({paper}) => {
  const props: TwoColumnProps = {
    headline: <h4>{paper.title}</h4>,
    description: <PaperDescription paper={paper}></PaperDescription>
  }

  return (
    <Container fluid>
      <Row>
        <Col xl={8} className="paperTitle">
          <h4 >{paper.title}</h4>
        </Col>
        <Col xl={4}>
          <Container className="paperInfo" fluid>
            <Row>
              <p>{paper.author}</p>
            </Row>
            <Row>
              <p>{paper.media} ({paper.year})</p>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="separator"></Row>
    </Container>
  )
}

const PaperDescription: React.FC<{paper: PaperInfo}> = ({paper}) => {
  return (
    <Container fluid>
      <Row>
        <p>{paper.author}</p>
      </Row>
      <Row>
        <p>{paper.media}</p>
      </Row>
      <Row>
        <p>{paper.year}</p>
      </Row>
    </Container>
  )
}