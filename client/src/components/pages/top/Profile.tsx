import React from "react";
import { Row, Col , Image} from "react-bootstrap";
import { NatsuumeProfile } from '../../../types/Profile';
import { WebServices, WebAccounts } from '../../../types/WebAccounts';
import { ThreeColumn, ThreeColumnProps } from '../common/Columns';

export const Profile: React.FC = () => {
  const {
    name,
    description,
    icon,
    accounts
  } = NatsuumeProfile;
  
  const props: ThreeColumnProps = {
    image: <Image src={icon} roundedCircle className="accountIcon"></Image>,
    headline: <ProfileName name={name} accounts={accounts}></ProfileName>,
    description: <Description description={description}></Description>
  }

  return (
    <ThreeColumn props={props}></ThreeColumn>
  )
}

const Description: React.FC<{description: string}> = ({description}) => (
  <Col>
  {
      description.split("\n").map((text, key) => (
        <p className="description" key={key}>
          {text}
        </p>
      ))
    }
  </Col>
)

const ProfileName: React.FC<{name: string, accounts: WebServices[]}> = ({name, accounts}) => {
  return (
    <Row className="profileBlock">
      <Col className="profileName" xs={6}>
        <p>{name}</p>
      </Col>
      <Col xs={5} className="socialIcons">
      {
        accounts.map((account, key) => {
          const { icon, link } = WebAccounts[account];
          return (
              <a href={link} key={key}>
                <Image src={icon} className="socialIcon" roundedCircle></Image>
              </a>
          )
        })
      }
      </Col>
    </Row>
  )
}