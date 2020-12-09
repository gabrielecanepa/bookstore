import React from 'react'
import styled from 'styled-components'
import { Error as ErrorIcon } from 'assets/icons'

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

const StyledErrorIcon = styled(ErrorIcon)`
  margin: 0 1rem;
  max-width: 32rem;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.error};
  line-height: 1;
  margin: 2rem 0 1rem;
`

const Message = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4;
`

const EmailLink = styled.a`
  text-decoration: underline;
`

const Error = ({ error }) => (
  <FlexContainer>
    <StyledErrorIcon />
    <Title>{'Ooops! Qualcosa è andato storto.'}</Title>
    <Message>
      {`Sembra che tu sia incappato in un errore di ${error.type} (codice ${error.status}).`}
      <br />
      {'Per favore, prova a fare un refresh della pagina, o '}
      <EmailLink href="mailto:support@bookstore.com">{'clicca qui'}</EmailLink>
      {' per contattare il nostro supporto.'}
    </Message>
  </FlexContainer>
)

export default Error
