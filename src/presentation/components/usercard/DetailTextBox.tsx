import { Box, Typography } from '@mui/material'

interface Props {
  title: string
  content: string | number | Date | null
  type?: 'date' | 'number' | 'string' | null | undefined
}
const DetailTextBox = ({ title, content, type }: Props) => {
  return (
    <Box className='flex justify-between p-2'>
      <Typography variant='body1' className='text-gray-400'>
        {title}:
      </Typography>
      {type === 'date' ? (
        <Typography variant='body1' fontWeight={'medium'}>
          {content
            ? new Date(content).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            : 'Not Specified'}
        </Typography>
      ) : (
        <Typography variant='body1' fontWeight={'medium'}>
          {`${content ? content : 'Not Specified'}`}
        </Typography>
      )}
    </Box>
  )
}

export default DetailTextBox
