import { Alert } from '@mui/material'
import { useState } from 'react'

import { SearchUser } from '../../app'

import { Result } from '../components/result/Result'
import { Search } from '../components/search/Search'

function App() {
  const [query, setQuery] = useState<string>('')
  const [isBlank, setIsBlank] = useState<boolean>(false)

  const fetchData = async (username: string) => {
    const res = new SearchUser()
    await res.searchUser(username)
  }

  const submitSearch = async (username: string) => {
    if (!username) {
      setIsBlank(true)
      setTimeout(() => {
        setIsBlank(false)
      }, 3000)
    } else {
      setIsBlank(false)
      setQuery(username)
      await fetchData(username)
    }
  }

  return (
    <div className='App min-h-[100dvh] max-w-screen-md'>
      <Search onSubmitSearch={submitSearch} />
      {query && <Result query={query} />}
      {isBlank && (
        <Alert severity='error' className='mt-4'>
          Please enter a username
        </Alert>
      )}
    </div>
  )
}

export default App
