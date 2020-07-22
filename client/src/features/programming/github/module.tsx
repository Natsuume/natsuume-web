import React from "react";
import { handle, GitHubActions, GitHubRepository, GitHubState } from './interface';
import { myServerClient } from '../../../utils/axios';
import { GitHub } from "./component/GitHub";

const initialState: GitHubState = {
  repositories: []
}

handle.epic()
  .on(GitHubActions.$mounted, async () => {
    const test = await myServerClient.get<GitHubRepository[]>("https://api.natsuumeweb.natsuume.dev/api/github")
      .then(response => response.data)
      .catch(reason => {
        console.log(reason)
      });
    // const repositories: GitHubRepository[] = await myServerClient.get<GitHubRepository[]>("https://api.natsuumeweb.natsuume.dev/api/github")
    //   .then(response => response.data);
    return null;
    // return GitHubActions.fetchGitHubFulfilled(repositories);
  })

handle.reducer(initialState)
  .on(GitHubActions.fetchGitHubFulfilled, (state, {repositories}) => {
    state.repositories = repositories;
  })

export const GitHubModule: React.FC = () => {
  handle();

  return <GitHub></GitHub>
}