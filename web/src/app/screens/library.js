import React from 'react'
import styled from 'styled-components'

import Card from '../components/card'

const Container = styled.div`
  display: grid;
  padding: 0 1rem 1rem;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.screens.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.screens.xl}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Content = ({ books }) => (
  <Container>
    {books.map(book => (
      <Card key={book.id} {...book} />
    ))}
  </Container>
)

export default Content
