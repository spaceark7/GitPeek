export interface QueryResult {
  data: any
  error: any
  isLoading: boolean
  success: boolean | null
  isFetching: boolean | null

  repoerror: any
  repoloading: boolean
  reposuccess: boolean | null
  repofetching: boolean | null
}
