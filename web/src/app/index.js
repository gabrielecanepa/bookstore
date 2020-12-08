import React, { useCallback, useEffect, useMemo, useState } from 'react'
import theme, { GlobalStyle } from 'theme'
import { Dropdown, Navbar } from './components'
import { EmptyState, Error, Library, Loader } from './screens'
import { ThemeProvider } from 'styled-components'
import { apiGetBooks, apiRequest } from 'utils'

const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [order, setOrder] = useState('')
  const [query, setQuery] = useState('')

  const params = useMemo(
    () => ({
      order_by: order,
      q: query,
    }),
    [order, query]
  )

  const fetchBooks = useCallback(async () => {
    setIsLoading(true)
    const { json, requestError } = await apiRequest(apiGetBooks, [params])
    requestError ? setError(requestError) : setBooks(json)
    setIsLoading(false)
  }, [params])

  useEffect(() => fetchBooks(), [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar fetchBooks={fetchBooks} query={query} setQuery={setQuery} />
      <Dropdown books={books} fetchBooks={fetchBooks} order={order} setOrder={setOrder} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : books.length === 0 ? (
        <EmptyState fetchBooks={fetchBooks} query={query} setQuery={setQuery} />
      ) : (
        <Library books={books} />
      )}
    </ThemeProvider>
  )
}

export default App
