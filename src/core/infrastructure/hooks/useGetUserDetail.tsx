import { useQuery } from 'react-query'
import { GetUserDetail } from '../../../app/useCases/getUserDetail/GetUserDetail'
import { GetUserRepos } from '../../../app/useCases/getUserRepos/GetUserRepo'
import { QueryResult } from '../interface/QueryResult'

export const useGetUserDetail = (name: string): QueryResult => {
  const { data, isLoading, error, isFetching, isSuccess } = useQuery(
    ['user detail', name],
    async () => {
      const res = new GetUserDetail()
      const data = await res.getUserDetail(name)
      return data
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  const {
    data: reposData,
    error: repoError,
    isLoading: repoLoading,
    isFetching: repoFething,
  } = useQuery(
    ['user repositories', name],
    async () => {
      const res = new GetUserRepos()
      const data = await res.getUserRepos(name)
      return data
    },
    {
      keepPreviousData: true,
      enabled: !!data?.login,
    }
  )

  //   useEffect(() => {
  //     refetch()
  //   }, [username, refetch])

  const result: QueryResult = {
    data: { ...data, repos: reposData } ?? {},
    isLoading,
    error,
    isFetching,
    success: isSuccess,
    repoerror: repoError,
    repoloading: repoLoading,
    repofetching: repoFething,
    reposuccess: isSuccess,
  }
  return result
}
