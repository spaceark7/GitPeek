import axios from 'axios'
import { GithubUserRepository } from '../../domain'
import { createGithubUserFromJson, GithubUser } from '../../domain'
import { createGithubUserRepoFromJson, GithubUserRepo } from '../../domain'

export class GithubServices implements GithubUserRepository {
  private BASE_URL = 'https://api.github.com'
  private TOKEN_GITHUB = import.meta.env.VITE_GITHUB_API_TOKEN

  async searchUser(query: string): Promise<GithubUser[]> {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/search/users?q=${encodeURIComponent(
          `${query} in:login in:name`
        )}&per_page=5`,
        {
          headers: {
            Authorization: `Bearer ${this.TOKEN_GITHUB}`,
          },
        }
      )

      const githubUSer = response.data.items.map((json: any) =>
        createGithubUserFromJson(json)
      )

      return githubUSer
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async getUserRepos(name: string): Promise<GithubUserRepo[]> {
    const response = await axios.get(`${this.BASE_URL}/users/${name}/repos`, {
      headers: {
        Authorization: `bearer ${this.TOKEN_GITHUB}`,
      },
    })
    const githubUserRepos = response.data.map((json: any) =>
      createGithubUserRepoFromJson(json)
    )
    return githubUserRepos
  }

  async getUserDetail(name: string): Promise<GithubUser> {
    const response = await axios.get(`${this.BASE_URL}/users/${name}`, {
      headers: {
        Authorization: `bearer ${this.TOKEN_GITHUB}`,
      },
    })
    console.log('no network', response)
    const githubUser = createGithubUserFromJson(response.data)
    return githubUser
  }
}
