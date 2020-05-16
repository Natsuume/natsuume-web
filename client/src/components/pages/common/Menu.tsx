import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useActions } from "typeless";
import "../../../css/menu.css";
import { PageChangeActions } from "../../../features/global/interface";
import { PageDefinitions } from "../../../types/PageDefinitions";

export const Menu: React.FC = () => {
  const { changePage } = useActions(PageChangeActions);
  return (
    <Navbar sticky="top" className="menuBar">
      <Navbar.Brand>natsuume web</Navbar.Brand>
      <Nav>
      {
          Object.values(PageDefinitions).map(({path, pageName}, key) => {
             return <Nav.Link key={key} onClick={() => changePage(path)}>
               {pageName}
             </Nav.Link>
          })
        }
      </Nav>
    </Navbar>
  )
}