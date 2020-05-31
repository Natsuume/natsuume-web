import { createModule } from 'typeless';
import { GitHubSymbol } from './symbol';

export const [handle, GitHubActions, getGitHubState] = createModule(GitHubSymbol)
  .withActions({
    $mounted: null,
    fetchGitHubFulfilled: (repositories: GitHubRepository[]) => ({payload: { repositories}})
  })
  .withState<GitHubState>();

export interface GitHubState {
  repositories: GitHubRepository[]
}

export interface GitHubRepository {
  name: string,
  description: string | null,
  createdDate: string,
  updatedDate: string,
  license: {name: string},
  languages: string[],
  url: string,
}
