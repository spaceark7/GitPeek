import { GithubServices, GithubUserRepositoryImpl } from '../../../core/data'
import { GithubUser } from '../../../core/domain/entities/GithubUser'

interface SearchGithubUserUseCase {
  searchUser: (username: string) => Promise<GithubUser[]>
}

export class SearchUser implements SearchGithubUserUseCase {
  private githubUserRepositoryImpl: GithubUserRepositoryImpl
  private githubService: GithubServices

  constructor() {
    this.githubService = new GithubServices()
    this.githubUserRepositoryImpl = new GithubUserRepositoryImpl(
      this.githubService
    )
  }

  searchUser(username: string): Promise<GithubUser[]> {
    const githubUser = this.githubUserRepositoryImpl.searchUser(username)
    return githubUser
  }
}
