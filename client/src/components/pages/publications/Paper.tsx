import React from "react";
import { Container, Row } from 'react-bootstrap';
import { PaperList, PaperInfo } from "../../../types/Publications";
import { TwoColumnProps, TwoColumn } from "../common/Columns";

export const Papers: React.FC = () => {

  return (
    <Container fluid>
      {
        PaperList.map((paper, key) =>
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

  return <TwoColumn props={props}></TwoColumn>
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