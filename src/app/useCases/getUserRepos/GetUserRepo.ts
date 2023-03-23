import { GithubServices, GithubUserRepositoryImpl } from '../../../core/data'
import { GithubUserRepo } from '../../../core/domain'

interface GetUserRepoUseCase {
  getUserRepos(name: string): Promise<GithubUserRepo[]>
}

export class GetUserRepos implements GetUserRepoUseCase {
  private githubUserRepositoryImpl: GithubUserRepositoryImpl
  private githubService: GithubServices

  constructor() {
    this.githubService = new GithubServices()
    this.githubUserRepositoryImpl = new GithubUserRepositoryImpl(
      this.githubService
    )
  }

  async getUserRepos(name: string): Promise<GithubUserRepo[]> {
    const response = await this.githubUserRepositoryImpl.getUserRepos(name)
    return response
  }
}
