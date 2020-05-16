import React from "react";
import { getPapersState } from "../interface";

export const Papers: React.FC = () => {
  const { papers } = getPapersState.useState();

  return (
    <div></div>
  )
}