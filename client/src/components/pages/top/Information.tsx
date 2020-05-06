import React from "react";
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { InformationData, SimpleInformationState } from "../../../types/InformationData";
import "../../../css/topPage.css"

export const Information: React.FC = () => {
  return (
    <Container>
      <Row className="informationBlock">
        <Col xs={10}>
          <ListGroup>
            {
              InformationData.map((info, key) => (
                <ListGroup.Item key={key}>
                  <Container>
                    <Row>
                      <Col xs={2}>
                        {toString(info.date)}
                      </Col>
                      <Col xs={10}>
                        <SwitchInformationItem info={info}></SwitchInformationItem>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

const toString: (date: Date) => string = (date) => {
  return [date.getFullYear(), date.getMonth()+1, date.getDate()].join("/")
}

const SwitchInformationItem: React.FC<{info: SimpleInformationState}> = ({info}) => {
  const {informationTexts, image} = info
  return (
    <Container>
      <Row>
        <Col xs={3}>
          {image !== undefined ? <Image src={image} className="informationThumbnail"></Image> : null}
        </Col>
        <Col>
          {
            informationTexts.map((text, key) =>
              <p key={key}>{text}</p>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}