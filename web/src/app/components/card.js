import React from 'react'
import styled from 'styled-components'
import { truncateString } from 'utils'

const StyledCard = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  display: flex;
  padding: 1rem;
`

const CardImage = styled.img`
  height: 6rem;
  width: 4rem;
  margin-right: 0.6rem;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Card = ({ title, author, publisher, imageUrl }) => (
  <StyledCard tabIndex="0">
    <CardImage alt={title} src={imageUrl} />
    <CardContent>
      <div>
        <p>{author}</p>
        <h3 title={title}>{truncateString(title, 25)}</h3>
      </div>
      <small>{publisher}</small>
    </CardContent>
  </StyledCard>
)

export default Card
