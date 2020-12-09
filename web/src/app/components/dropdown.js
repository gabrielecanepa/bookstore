/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`

const StyledSelect = styled.select`
  font-family: 'Roboto';
  border: none;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 4px;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`

const Dropdown = ({ disabled, fetchBooks, order, setOrder }) => {
  const dropdownRef = useRef(null) // to check if the component has mounted

  const onOrderChange = useCallback(
    event => {
      setOrder(event.target.value)
    },
    [setOrder]
  )

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current = false
    } else {
      fetchBooks()
    }
  }, [order])

  return (
    <Container>
      <label htmlFor="order-by">{'Ordina per: '}</label>
      <StyledSelect disabled={disabled} id="order-by" name="order-by" onChange={onOrderChange} ref={dropdownRef}>
        <option value="">{'Default'}</option>
        <option value="title">{'Titolo'}</option>
        <option value="author">{'Autore'}</option>
        <option value="publisher">{'Editore'}</option>
      </StyledSelect>
    </Container>
  )
}

export default Dropdown
