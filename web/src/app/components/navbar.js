import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

import theme from '../../theme'
import { Magnifier } from '../../assets/icons'

const StyledNavbar = styled.nav`
  height: 62px;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const Title = styled(({ children, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="./" {...rest}>
    <h1>{children}</h1>
  </a>
))`
  color: white;
  text-decoration: none;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`

const Searchbox = styled.input`
  height: 2rem;
  color: black;
  margin-right: 1rem;
  width: 18rem;
  padding: 0 0.5rem;
  flex-grow: 1;

  ${({ open }) => !open && 'display: none;'}

  @media (min-width: ${({ theme }) => theme.screens.sm}px) {
    display: initial;
    flex-grow: 0;
  }

  ::placeholder {
    color: ${({ theme }) => theme.primaryText};
  }
`

const SearchButton = props => (
  <button type="button" {...props}>
    <Magnifier />
  </button>
)

const Navbar = ({ disabled, fetchBooks, lastQuery, query, setQuery }) => {
  const [searchboxOpen, setSearchboxOpen] = useState(false)
  const searchboxRef = useRef(null)

  const onQueryChange = useCallback(
    event => {
      setQuery(event.target.value)
    },
    [setQuery]
  )

  const onSearchboxKeydown = useCallback(
    event => {
      if (query === lastQuery) return
      if (event.key === 'Enter') {
        fetchBooks()
      }
    },
    [fetchBooks, lastQuery, query]
  )

  const onSearchButtonClick = useCallback(async () => {
    if (window.screen.width < theme.screens.sm) {
      await setSearchboxOpen(!searchboxOpen)
      searchboxRef.current.focus()
      return
    }
    fetchBooks()
  }, [fetchBooks, searchboxOpen, setSearchboxOpen])

  return (
    <StyledNavbar>
      {((!searchboxOpen && window.screen.width < theme.screens.sm) || window.screen.width >= theme.screens.sm) && (
        <Title>{'La Mia Libreria'}</Title>
      )}
      <SearchContainer open={searchboxOpen}>
        <Searchbox
          autoFocus
          disabled={disabled}
          onChange={onQueryChange}
          onKeyDown={onSearchboxKeydown}
          open={searchboxOpen}
          placeholder="Cerca per titolo, autore o editore..."
          ref={searchboxRef}
          value={query}
        />
        <SearchButton disabled={disabled} onClick={onSearchButtonClick} />
      </SearchContainer>
    </StyledNavbar>
  )
}

export default Navbar
