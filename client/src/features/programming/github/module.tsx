import React from "react";
import { handle, GitHubActions, Repository, GitHubState } from './interface';
import { githubClient } from '../../../utils/axios';
import { githubRequestUrl, GitHubRepositoryAPIResponse, githubUserName } from '../../../types/github';
import { GitHub } from "./component/GitHub";

const initialState: GitHubState = {
  repositories: []
}

handle.epic()
  .on(GitHubActions.$mounted, async () => {
    const repositories: Repository[] = await githubClient.get(githubRequestUrl)
      .then<GitHubRepositoryAPIResponse[]>(response => response.data)
      .then<Repository[]>(async repositories => {
        return await Promise.all(repositories.map(async repository => {
          return {
            name: repository.name,
            description: repository.description,
            url: repository.html_url,
            owner: repository.owner.login,
            fork: repository.fork,
            languages: await githubClient.get(repository.languages_url)
              .then<string[]>(response => Object.keys(response.data))
            ,
            created: new Date(repository.created_at),
            updated: new Date(repository.updated_at),
            license: repository.license ? repository.license.name: repository.license
          }
        }))
      });

      repositories.sort((a, b) => a.updated > b.updated ? -1 : 1)
    return GitHubActions.fetchGitHubFulfilled(repositories.filter(repository => !repository.fork && repository.owner === githubUserName));
  })

handle.reducer(initialState)
  .on(GitHubActions.fetchGitHubFulfilled, (state, {repositories}) => {
    state.repositories = repositories;
  })

export const GitHubModule: React.FC = () => {
  handle();

  return <GitHub></GitHub>
}