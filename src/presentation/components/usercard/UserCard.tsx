import {
  Alert,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Skeleton,
  styled,
  Typography,
} from '@mui/material'
import { UserProps } from '../../interface'
import { IconButtonProps } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useGetUserDetail } from '../../../core/infrastructure/hooks/useGetUserDetail'
import DetailTextBox from './DetailTextBox'
import { GithubUserRepo } from '../../../core/domain'
import { UserRepoCard } from './UserRepoCard'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const UserCard = ({ user }: UserProps) => {
  const [expanded, setExpanded] = useState(false)
  const {
    data,
    error,
    isFetching,
    isLoading,
    success,
    reposuccess,
    repoerror,
  } = useGetUserDetail(user.login)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  let content: JSX.Element = <></>
  if (isLoading) {
    content = (
      <Card className=' bg-transparent'>
        <div className='flex'>
          <CardHeader
            className='flex-1'
            avatar={<Skeleton variant='circular' width={40} height={40} />}
            title={<Skeleton height={30} />}
            subheader={<Skeleton height={30} />}
          />
          <CardActions>
            <Skeleton variant='rounded' />
          </CardActions>
        </div>
      </Card>
    )
  }
  if (error && repoerror) {
    content = <Alert severity='error'>{error.message}</Alert>
  }
  if (isFetching) {
    content = (
      <Card className=' bg-transparent'>
        <div className='flex'>
          <CardHeader
            className='flex-1'
            avatar={<Skeleton variant='circular' width={40} height={40} />}
            title={<Skeleton height={30} />}
            subheader={<Skeleton height={30} />}
          />
          <CardActions>
            <Skeleton variant='rounded' />
          </CardActions>
        </div>
      </Card>
    )
  }
  if (data.length === 0) {
    content = <p>Search for a user</p>
  }
  if (success && reposuccess) {
    content = (
      <Card className=' bg-transparent'>
        <div className='flex'>
          <CardHeader
            className='flex-1'
            avatar={<Avatar alt={user.login} src={user.avatar_url} />}
            title={user.login}
            subheader={user.type}
          />
          <CardActions>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </div>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent className='grid grid-cols-1  md:grid-cols-2 md:gap-x-3'>
            <DetailTextBox title='Github Id' content={data.id} />
            <DetailTextBox title='Github Username' content={data.login} />
            <DetailTextBox title='Full Name' content={data.name} />
            <DetailTextBox title='Email' content={data.email} />
            <DetailTextBox title='Location' content={data.location} />
            <DetailTextBox
              title='Joined At'
              type='date'
              content={data.created_at}
            />
            <DetailTextBox title='Followers' content={data.followers} />
            <DetailTextBox title='Following' content={data.following} />
          </CardContent>
          <Divider />
          <Box className='sticky top-0 px-6 py-3  '>
            <Typography variant='body1' color={'white'} fontWeight={'medium'}>
              Repositories ({data.repos?.length > 0 ? data.repos.length : 0})
            </Typography>
          </Box>
          <Box className='relative max-h-[70dvh] overflow-y-auto px-4 pb-8 md:px-6'>
            <Box className='flex  flex-col  gap-y-2 py-4'>
              {data?.repos &&
                reposuccess &&
                data.repos.map((repo: GithubUserRepo) => (
                  <UserRepoCard key={repo.id} repo={repo} />
                ))}
            </Box>
          </Box>
        </Collapse>
      </Card>
    )
  }

  return content
}

export default UserCard
