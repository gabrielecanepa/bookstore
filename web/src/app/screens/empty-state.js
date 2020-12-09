import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const SeeAllLink = styled.button`
  font-size: 1rem;
  text-decoration: underline;
`

const EmptyState = ({ fetchBooks, isEmptyLibrary, lastQuery, query, setQuery }) => {
  const onSeeAllClick = useCallback(() => setQuery(''), [setQuery])

  useEffect(() => {
    if (query === '') fetchBooks()
  }, [fetchBooks, query])

  return (
    <FlexContainer>
      {isEmptyLibrary ? (
        <p>{'Non è presente alcun libro in questa libreria 😭'}</p>
      ) : (
        <>
          <p>{`Nessun risultato trovato per "${lastQuery}".`}</p>
          <p>
            {'Effettua una nuova ricerca o '}
            <SeeAllLink onClick={onSeeAllClick}>{'vedi tutti i libri'}</SeeAllLink>
            {'.'}
          </p>
        </>
      )}
    </FlexContainer>
  )
}

export default EmptyState
