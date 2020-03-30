import React from "react";
import "../../css/header.css"

export type HeaderContent ={
  content: React.FC;
};

export const Header: React.FC = props => {
  return (
    <div className="page">
      <div className="header">
        {props.children}
      </div>
  </div>
  )
}
