import React from "react";
import { handle, InformationActions, InformationItem } from "./interface";
import { httpClient } from '../../../utils/axios';
import { Information } from "./component/Information";
import { initialInformationState } from "../../../types/top/initialStates";

handle.epic()
  .on(InformationActions.$mounted, async () => {
    const info: InformationItem[] = await httpClient.get("/api/information")
      .then(response => response.data.information)
      .catch(error => {
        console.log(error.response);
        console.log(error.request);
        console.log(error.config);
      })

    if(info === undefined) {
      return null;
    }else{
      return InformationActions.fetchInformationFulfilled(info);
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