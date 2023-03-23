import { GithubUser } from '../entities/GithubUser'
import { GithubUserRepo } from '../entities/GituhubUserRepos'

export interface GithubUserRepository {
  searchUser(query: string): Promise<GithubUser[]>
  getUserRepos(name: string): Promise<GithubUserRepo[]>
  getUserDetail(name: string): Promise<GithubUser>
}
