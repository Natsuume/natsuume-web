export const githubUserName = "Natsuume";

export const githubRequestUrl= "";
// export const githubRequestUrl = `https://api.github.com/users/${githubUserName}/repos`


export interface GitHubRepositoryAPIResponse {
  name: string,
  owner: GitHubOwner,
  html_url: string,
  description: string | null,
  fork: boolean,
  languages_url: string,
  created_at: string,
  updated_at: string,
  license: GitHubLicense,

}

export interface GitHubOwner {
  login: string,
}

export interface GitHubLicense {
  name: string
}