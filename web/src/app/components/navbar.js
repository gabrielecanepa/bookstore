import React, { useCallback } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  height: 64px;
  background: ${({ theme }) => theme.primary};
`

const Searchbox = styled.input`
  height: 52px;
`

const Navbar = ({ fetchBooks, query, setQuery }) => {
  const onQueryChange = useCallback(
    event => {
      setQuery(event.target.value)
    },
    [setQuery]
  )

  return (
    <StyledNavbar>
      <Searchbox onChange={onQueryChange} value={query} />
      <button disabled={query === ''} onClick={fetchBooks} type="submit">
        {'Search'}
      </button>
    </StyledNavbar>
  )
}

export default Navbar
