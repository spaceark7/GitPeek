import {
  CodeOutlined,
  MediationOutlined,
  StarOutline,
  VisibilityOutlined,
} from '@mui/icons-material'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { GithubUserRepo } from '../../../core/domain'
interface UserRepoCardProps {
  repo: GithubUserRepo
}

export const UserRepoCard = ({ repo }: UserRepoCardProps) => {
  return (
    <Card>
      <CardHeader title={repo.name} subheader={repo.description} />
      <CardContent className='flex flex-wrap gap-x-4 gap-y-2'>
        <Typography
          className='inline-flex items-center rounded-md bg-white bg-opacity-10 p-1 pr-2'
          variant='caption'
        >
          <CodeOutlined className='mr-1 h-5' />
          {repo.language}
        </Typography>
        <Typography
          className='inline-flex items-center rounded-md bg-white bg-opacity-10 p-1 pr-2'
          variant='caption'
        >
          <StarOutline className='mr-1 h-5' />
          {repo.stargazers_count}
        </Typography>
        <Typography
          className='inline-flex items-center rounded-md bg-white bg-opacity-10 p-1 pr-2'
          variant='caption'
        >
          <VisibilityOutlined className='mr-1 h-5' />
          {repo.watchers_count}
        </Typography>
        <Typography
          className='inline-flex items-center rounded-md bg-white bg-opacity-10 p-1 pr-2'
          variant='caption'
        >
          <MediationOutlined className='mr-1 h-5 rotate-90' />
          {repo.forks_count}
        </Typography>
      </CardContent>
    </Card>
  )
}
