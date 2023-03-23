import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GithubUser } from '../../../core/domain'
import { useSearchUser } from '../../../core/infrastructure/hooks/useSearchUser'
import { QueryProps } from '../../interface'
import Loader from '../common/Loader'
import UserCard from '../usercard/UserCard'

export const Result = ({ query }: QueryProps) => {
  const { data, isLoading, error, isFetching, success } = useSearchUser(query)

  let content: JSX.Element = <></>
  if (isLoading) {
    content = <Loader title='Wait! Loading data' />
  }
  if (error) {
    content = <Alert severity='error'>{error.message}</Alert>
  }
  if (isFetching) {
    content = <Loader title="Just a moment! We're fetching some data" />
  }
  if (query === '') {
    content = (
      <section className='max-w-screen-md rounded-md bg-gray-800 p-8'>
        <Typography variant='h5' color={'white'} fontWeight={'bold'}>
          Please insert username to search
        </Typography>
      </section>
    )
  }
  if (data && data.length > 0 && query !== '' && !isLoading && !isFetching) {
    content = (
      <>
        <Typography variant='h5' color={'white'} fontWeight={'bold'}>
          Search for "{query}" has {data.length} result{' '}
        </Typography>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {isFetching && <p>Fetching...</p>}
        <Box className='flex flex-col gap-y-2 py-4'>
          {data &&
            !isLoading &&
            !isFetching &&
            data?.map((user: GithubUser) => (
              <UserCard key={user.id} user={user} />
            ))}
        </Box>
      </>
    )
  }
  if (success && data.length === 0 && !error) {
    content = (
      <section className='max-w-screen-md rounded-md bg-gray-800 p-4 md:p-8'>
        <Typography variant='h5' color={'white'} fontWeight={'bold'}>
          Sorry, we can't find any user with username "{query}"
        </Typography>
      </section>
    )
  }

  return (
    <section className='max-w-screen-md rounded-md bg-gray-800 p-4 md:p-8'>
      {content}
    </section>
  )
}
