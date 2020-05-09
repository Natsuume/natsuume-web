import React from "react";
import { getInformationState } from '../interface';
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";


export const Information: React.FC = () => {
  const { information } = getInformationState.useState();
  return (
    <Container>
      <Row className="informationBlock">
        <Col xs={10}>
          <ListGroup>
            {
              information.map((info, key) => {
                const { content, date, thumbnailUrl} = info;
                return (
                  <ListGroup.Item key={key}>
                    <Container>
                      <Row>
                        <Col xs={2}>
                          {toString(date)}
                        </Col>
                        <Col>
                          <Container>
                            <Row>
                              <Col xs={3}>
                                {
                                  thumbnailUrl
                                    ? <Image src={thumbnailUrl} className="informationThumbnail"></Image>
                                    : null
                                }
                              </Col>
                              <Col>
                                {
                                  content.split("\n").map((text, key) => (
                                    <p key={key}>{text}</p>
                                  ))
                                }
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

const toString: (date: Date) => string = (date) => {
  return [date.getFullYear(), date.getMonth()+1, date.getDate()].join("/")
}