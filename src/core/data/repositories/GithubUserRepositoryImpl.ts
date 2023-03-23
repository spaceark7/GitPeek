import { GithubUser, GithubUserRepo, GithubUserRepository } from '../../domain'
import { GithubServices } from '../services/GithubServices'

export class GithubUserRepositoryImpl implements GithubUserRepository {
  private githubService: GithubServices

  constructor(githubService: GithubServices) {
    this.githubService = githubService
  }

  async searchUser(username: string): Promise<GithubUser[]> {
    const response = await this.githubService.searchUser(username)
    return response
  }
  async getUserRepos(name: string): Promise<GithubUserRepo[]> {
    const response = await this.githubService.getUserRepos(name)
    return response
  }
  async getUserDetail(name: string): Promise<GithubUser> {
    const response = await this.githubService.getUserDetail(name)
    return response
  }
}
