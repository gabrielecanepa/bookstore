/* eslint-disable jsx-a11y/no-onchange */
import React, { useCallback } from 'react'

const Dropdown = ({ fetchBooks, setOrder }) => {
  const onOrderChange = useCallback(
    event => {
      setOrder(event.target.value)
      fetchBooks()
    },
    [fetchBooks, setOrder]
  )

  return (
    <>
      <label htmlFor="order-by">{'Ordina per:'}</label>
      <select name="order-by" onChange={onOrderChange}>
        <option value="">{'Default'}</option>
        <option value="title">{'Titolo'}</option>
        <option value="author">{'Autore'}</option>
        <option value="publisher">{'Editore'}</option>
      </select>
    </>
  )
}

export default Dropdown
