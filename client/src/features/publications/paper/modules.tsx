import React from "react";
import { handle, PapersActions, PaperInfo, PapersState } from './interface';
import { Papers } from "./component/Papers";
import { myServerClient } from '../../../utils/axios';

const initialState: PapersState = {
  papers: []
}

handle.epic()
  .on(PapersActions.$mounted, async () => {
    const papers: PaperInfo[] = await myServerClient.get("/api/papers")
      .then(response => response.data)

    return PapersActions.fetchBooksFulfilled(papers);
  })

handle.reducer(initialState)
  .on(PapersActions.fetchBooksFulfilled, ((state, {books}) => {
    state.papers = books;
  }))


export const PapersModule: React.FC = () => {
  handle();

  return <Papers></Papers>
}