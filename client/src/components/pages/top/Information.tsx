import React from "react";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import { InformationItem, InformationItems } from '../../../types/InformationList';


export const Information: React.FC = () => {
  return (
    <Container>
      <Row className="informationBlock">
        <Col xs={12}>
          <InformationList></InformationList>
        </Col>
      </Row>
    </Container>
  );
}

const InformationList: React.FC = () => {
  const information: InformationItem[] = InformationItems;

  return (
    <ListGroup>
      {
        information.map((info, key) => {
          const { content, uploaded, thumbnailUrl} = info;
          const props: InformationProps = {
            Date: <Col xs={2}>{uploaded}</Col>,
            Thumbnail: <InfoImage image={thumbnailUrl}></InfoImage>,
            Text: <InfoText content={content}></InfoText>
          }

          return <InfoContent props={props} key={key}></InfoContent>
        })
      }
    </ListGroup>
  )
}

const InfoContent: React.FC<{props: InformationProps}> = ({props}) => {
  const {
    Date,
    Thumbnail,
    Text
  } = props
  return (
    <ListGroup.Item>
      <Container>
        <Row>
          {Date}
          <Col xs={3}>
            {Thumbnail}
          </Col>
          {Text}
        </Row>
      </Container>
    </ListGroup.Item>
  )
}

const InfoImage: React.FC<{image?: string}> = ({image}) => {
  return image ? <Image src={image} className="informationThumbnail"></Image> : null
}

const InfoText: React.FC<{content: string}> = ({content}) => {
  return (
    <Col xs={7}>
      {
        content.split("\n").map((text, key) => (
          <p key={key}>{text}</p>
        ))
      }
    </Col>
  )
}

interface InformationProps {
  Date: React.ReactNode,
  Text: React.ReactNode,
  Thumbnail?: React.ReactNode
}