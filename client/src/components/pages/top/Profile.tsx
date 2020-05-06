import React from "react";
import { NatsuumeProfile } from '../../../types/Profile';
import { Container, Row, Col , Image} from "react-bootstrap";
import { WebServices, WebAccounts } from "../../../types/WebAccounts";

export const Profile: React.FC = () => {
  const {
    name,
    descriptions,
    icon,
    accounts
  } = NatsuumeProfile;
  return (
    <Container>
      <Row>
        <Col xs={4} className="accountIconBlock">
          <Image src={icon} roundedCircle className="accountIcon"></Image>
        </Col>
        <Col>
          <Container>
            <Row>
              <Col className="profileName">{name}</Col>
              <SocialIcons accounts={accounts}></SocialIcons>
            </Row>
            <Row className="profileNameBlock"></Row>
            <Row>
              <Col>
                {
                  descriptions.map((description, key) => (
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

const SocialIcons: React.FC<{accounts: WebServices[]}> = ({accounts}) => {
  return (
    <Col xs={7} className="socialIcons">
    {
      accounts.map((account, key) => {
        const { name, icon, link } = WebAccounts[account as WebServices];
        const generateIcon: React.FC<{className: string}> = ({className}) => (
          <a href={link} key={key}>
            <Image src={icon} roundedCircle className={className}></Image>
          </a>
        )

        if(account === "HatenaBlog") {
          return generateIcon({className: "hatenaBlogIcon"});
        } else {
          return generateIcon({className: "standardSocialIcon"});
        }
      })
    }
    </Col>
  )
}