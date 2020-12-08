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

const EmptyState = ({ fetchBooks, query, setQuery }) => {
  const onSeeAllClick = useCallback(() => setQuery(''), [setQuery])

  // useEffect(() => {
  //   if (query === '') fetchBooks()
  // }, [fetchBooks, query])

  return (
    <FlexContainer>
      {query.length > 0 ? (
        <>
          <p>{`Nessun risultato trovato per "${query}".`}</p>
          <p>
            {'Effettua una nuova ricerca o '}{' '}
            <button onClick={onSeeAllClick} type="button">
              {'vedi tutti i libri.'}
            </button>{' '}
          </p>
        </>
      ) : (
        <p>{'Non è presente alcun libro in questa libreria 😭'}</p>
      )}
    </FlexContainer>
  )
}

export default EmptyState
