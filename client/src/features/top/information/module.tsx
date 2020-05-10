import React from "react";
import { handle, InformationActions, InformationItem } from "./interface";
import { httpClient } from '../../../utils/axios';
import { Information } from "./component/Information";
import { initialInformationState } from "../../../types/top/initialStates";

handle.epic()
  .on(InformationActions.$mounted, async () => {
    const info: InformationItem[] | null = await httpClient.get("/api/information")
      .then(response => response.data)
      .catch(error => {
        const response = error.response;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        return null;
      });

    if(info) {
      return InformationActions.fetchInformationFulfilled(info);
    }else{
      return null;
    }
  });

handle.reducer(initialInformationState)
  .on(InformationActions.fetchInformationFulfilled, (state, {info}) => {
    state.information = info;
  })

export const InformationModule: React.FC = () => {
  handle();

  return <Information></Information>
}