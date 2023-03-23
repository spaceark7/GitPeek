import { GithubServices, GithubUserRepositoryImpl } from '../../../core/data'
import { GithubUser } from '../../../core/domain'

interface GetUserDetailUseCase {
  getUserDetail(name: string): Promise<GithubUser>
}

export class GetUserDetail implements GetUserDetailUseCase {
  private githubUserRepositoryImpl: GithubUserRepositoryImpl
  private githubService: GithubServices

  constructor() {
    this.githubService = new GithubServices()
    this.githubUserRepositoryImpl = new GithubUserRepositoryImpl(
      this.githubService
    )
  }

  async getUserDetail(name: string): Promise<GithubUser> {
    const response = await this.githubUserRepositoryImpl.getUserDetail(name)
    return response
  }
}
