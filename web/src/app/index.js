import React, { useCallback, useEffect, useState } from 'react'
import theme, { GlobalStyle } from 'theme'
import { Dropdown, Navbar } from './components'
import { Error, Library, Loader } from './screens'
import { ThemeProvider } from 'styled-components'
import { apiGetBooks, apiRequest } from 'utils'

const AppBase = ({ children, ...rest }) => (
  <ThemeProvider theme={theme} {...rest}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [order, setOrder] = useState('')
  const [query, setQuery] = useState('')

  // const params = useMemo(
  //   () => ({
  //     order_by: order,
  //     q: query,
  //   }),
  //   [order, query]
  // )

  const fetchBooks = useCallback(async () => {
    const params = {
      order_by: order,
      q: query,
    }
    const { json, requestError } = await apiRequest(apiGetBooks, [params])
    if (requestError) {
      setError(requestError)
    } else {
      setBooks(json)
    }
    setIsLoading(false)
  }, [order, query])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchBooks(), []) // Fetches only on mount. Add fetchBooks to the dependencies to fetch every time params change

  return (
    <AppBase>
      <Navbar fetchBooks={fetchBooks} query={query} setQuery={setQuery} />
      <Dropdown fetchBooks={fetchBooks} order={order} setOrder={setOrder} />
      {isLoading ? <Loader /> : error ? <Error error={error} /> : <Library books={books} />}
    </AppBase>
  )
}

export default App
