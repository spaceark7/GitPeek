import { useQuery } from 'react-query'
import { SearchUser } from '../../../app/useCases/searchGithubUser/SearchGithubUser'
import { QueryResult } from '../interface/QueryResult'

export const useSearchUser = (username: string): QueryResult => {
  const { data, isLoading, error, isFetching, isSuccess } = useQuery(
    ['usersResult', username],
    async () => {
      const res = new SearchUser()
      const data = await res.searchUser(username)
      return data
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  //   useEffect(() => {
  //     refetch()
  //   }, [username, refetch])

  const result: QueryResult = {
    data: data ?? [],
    isLoading,
    error,
    isFetching,
    success: isSuccess,

    repoerror: null,
    repoloading: false,
    repofetching: false,
    reposuccess: false,
  }
  return result
}
