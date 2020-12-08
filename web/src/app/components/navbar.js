import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import theme from 'theme'
import { Close, Magnifier } from 'assets/icons'

const StyledNavbar = styled.nav`
  height: 62px;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const Title = styled.a`
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

const Searchbox = styled.input`
  height: 2rem;
  color: black;
  margin-right: 1rem;
  width: 18rem;
  padding: 0 0.5rem;

  ${({ open }) => !open && 'display: none;'}

  @media (min-width: ${({ theme }) => theme.screens.sm}px) {
    display: initial;
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

const CloseButton = props => (
  <button type="button" {...props}>
    <Close />
  </button>
)

const Navbar = ({ fetchBooks, query, setQuery }) => {
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
      if (event.key === 'Enter') {
        fetchBooks()
      }
    },
    [fetchBooks]
  )

  const onSearchButtonClick = useCallback(() => {
    if (window.screen.width < theme.screens.sm && !searchboxOpen) {
      setSearchboxOpen(true)
      searchboxRef.current.focus()
      return
    }
    fetchBooks()
  }, [fetchBooks, searchboxOpen, setSearchboxOpen])

  const onCloseButtonClick = useCallback(() => {
    setSearchboxOpen(false)
  }, [])

  // const onSearchboxBlur = useCallback(event => console.log(event), [])

  return (
    <StyledNavbar>
      {((!searchboxOpen && window.screen.width < theme.screens.sm) || window.screen.width >= theme.screens.sm) && (
        <Title href="">{'La Mia Libreria'}</Title>
      )}
      <SearchContainer>
        <Searchbox
          autoFocus
          // onBlur={onSearchboxBlur}
          onChange={onQueryChange}
          onKeyDown={onSearchboxKeydown}
          open={searchboxOpen}
          placeholder="Cerca per titolo, autore o editore..."
          ref={searchboxRef}
          value={query}
        />
        <SearchButton disabled={query === ''} onClick={onSearchButtonClick} />
        {searchboxOpen && window.screen.width < theme.screens.sm && <CloseButton onClick={onCloseButtonClick} />}
      </SearchContainer>
    </StyledNavbar>
  )
}

export default Navbar
