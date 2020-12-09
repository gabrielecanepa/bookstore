import React, { useCallback, useEffect, useMemo, useState } from 'react'
import theme, { GlobalStyle } from 'theme'
import { Dropdown, Navbar } from './components'
import { EmptyState, Error, Library, Loader } from './screens'
import { ThemeProvider } from 'styled-components'
import { apiGetBooks, apiRequest } from 'utils'

const AppBase = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEmptyLibrary, setIsEmptyLibrary] = useState(false)
  const [error, setError] = useState(null)
  const [order, setOrder] = useState('')
  const [query, setQuery] = useState('')
  const [lastQuery, setLastQuery] = useState(query)

  const params = useMemo(() => {
    const obj = {}
    if (order !== '') obj.order_by = order
    if (query !== '') obj.q = query
    return obj
  }, [order, query])

  const fetchBooks = useCallback(async () => {
    setIsLoading(true)
    setLastQuery(query)
    const { json, requestError } = await apiRequest(apiGetBooks, [params])
    requestError ? setError(requestError) : setBooks(json)
    if (json && json.length === 0 && query === '') setIsEmptyLibrary(true)
    setIsLoading(false)
  }, [params, query])

  useEffect(() => fetchBooks(), [])

  return (
    <AppBase>
      <Navbar
        disabled={isEmptyLibrary || !!error}
        fetchBooks={fetchBooks}
        isEmptyLibrary={isEmptyLibrary}
        lastQuery={lastQuery}
        query={query}
        setQuery={setQuery}
      />
      <Dropdown disabled={books.length < 2} fetchBooks={fetchBooks} order={order} setOrder={setOrder} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : books.length === 0 ? (
        <EmptyState
          fetchBooks={fetchBooks}
          isEmptyLibrary={isEmptyLibrary}
          lastQuery={lastQuery}
          query={query}
          setQuery={setQuery}
        />
      ) : (
        <Library books={books} />
      )}
    </AppBase>
  )
}

export default App
