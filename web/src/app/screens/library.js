import React from 'react'

const Content = ({ books }) => (
  <div>
    {books.map(book => (
      <li key={book.id}>{book.title}</li>
    ))}
  </div>
)

export default Content
