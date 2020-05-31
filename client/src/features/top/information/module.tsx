import React from "react";
import { handle, InformationActions, InformationItem, InformationState } from './interface';
import { Information } from "./component/Information";
import { myServerClient } from "../../../utils/axios";

const initialState: InformationState = {
  information: []
}

handle.epic()
  .on(InformationActions.$mounted, async () => {
    const info: InformationItem[] | null = await myServerClient.get<InformationItem[]>("/api/information")
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

handle.reducer(initialState)
  .on(InformationActions.fetchInformationFulfilled, (state, {info}) => {
    state.information = info;
  })

export const InformationModule: React.FC = () => {
  handle();

  return <Information></Information>
}