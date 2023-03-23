import { GithubUser } from '../core/domain'

export interface QueryProps {
  query: string
}

export interface UserProps {
  user: GithubUser
}
