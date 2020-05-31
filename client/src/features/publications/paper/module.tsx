import React from "react";
import { handle, PapersActions, PaperInfo, PapersState } from './interface';
import { Papers } from "./component/Papers";
import { myServerClient } from '../../../utils/axios';

const initialState: PapersState = {
  papers: []
}

handle.epic()
  .on(PapersActions.$mounted, async () => {
    const papers: PaperInfo[] = await myServerClient.get<PaperInfo[]>("/api/paper")
      .then(response => response.data)

    return PapersActions.fetchPapersFulfilled(papers);
  })

handle.reducer(initialState)
  .on(PapersActions.fetchPapersFulfilled, ((state, {papers}) => {
    state.papers = papers;
  }))


export const PapersModule: React.FC = () => {
  handle();

  return <Papers></Papers>
}