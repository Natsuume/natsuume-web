import { createModule } from 'typeless';
import { GitHubSymbol } from './symbol';

export const [handle, GitHubActions, getGitHubState] = createModule(GitHubSymbol)
  .withActions({
    $mounted: null,
    fetchGitHubFulfilled: (repositories: Repository[]) => ({payload: { repositories}})
  })
  .withState<GitHubState>();

export interface GitHubState {
  repositories: Repository[]
}

export interface Repository {
  name: string,
  url: string,
  description: string | null,
  owner: string,
  fork: boolean,
  languages: string[],
  created: Date,
  updated: Date,
  license: string | null,
}
