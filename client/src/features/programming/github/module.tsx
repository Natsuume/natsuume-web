import React from "react";
import { handle, GitHubActions, GitHubRepository, GitHubState } from './interface';
import { myServerClient } from '../../../utils/axios';
import { GitHub } from "./component/GitHub";

const initialState: GitHubState = {
  repositories: []
}

handle.epic()
  .on(GitHubActions.$mounted, async () => {
    const repositories: GitHubRepository[] = await myServerClient.get<GitHubRepository[]>("/api/github")
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return [];
      });
    return GitHubActions.fetchGitHubFulfilled(repositories);
  })

handle.reducer(initialState)
  .on(GitHubActions.fetchGitHubFulfilled, (state, {repositories}) => {
    state.repositories = repositories;
  })

export const GitHubModule: React.FC = () => {
  handle();

  return <GitHub></GitHub>
}