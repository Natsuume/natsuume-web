import React from "react";
import { Container, Row, Col , Image} from "react-bootstrap";
import { SocialAccount, getProfileState } from '../interface';

export const Profile: React.FC = () => {
  const {
    name,
    description,
    imageUrl,
    socialAccounts
  } = getProfileState.useState();

  return (
    <Container>
      <Row>
        <Col xs={4} className="accountIconBlock">
          <Image src={imageUrl} roundedCircle className="accountIcon"></Image>
        </Col>
        <Col>
          <Container>
            <ProfileName name={name} socialAccounts={socialAccounts}></ProfileName>
            <Row className="profileNameBlock"></Row>
            <Row>
              <Col>
                {
                  description.split("\n").map((description, key) => (
                    <p className="description" key={key}>
                      {description}
                    </p>
                  ))
                }
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

const ProfileName: React.FC<{name: string, socialAccounts: SocialAccount[]}> = ({name, socialAccounts}) => {
  return (
    <Row>
      <Col className="profileName" xs={4}>{name}</Col>
      {
        socialAccounts.map((account, key) => {
          const { accountUrl, iconUrl } = account;
          return (
            <Col xs={7} className="socialIcons" key={key}>
              <a href={accountUrl}>
                <Image src={iconUrl} className="socialIcon" roundedCircle></Image>
              </a>
            </Col>
          )
        })
      }
    </Row>
  )
}