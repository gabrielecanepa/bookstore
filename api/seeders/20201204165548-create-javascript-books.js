const axios = require('axios')
const querystring = require('querystring')

const GOOGLE_BOOKS_API_BASE = 'https://www.googleapis.com/books/v1'

const options = {
  q: 'javascript',
  maxResults: 40,
}

module.exports = {
  up: async queryInterface =>
    axios
      .get(`${GOOGLE_BOOKS_API_BASE}/volumes/?${querystring.encode(options)}`)
      .then(response =>
        response.data.items.reduce((result, book) => {
          const { title, authors, publisher, imageLinks } = book.volumeInfo
          const author = authors && authors.join(', ')
          const url = book.selfLink
          const imageUrl = imageLinks && imageLinks.thumbnail
          result.push({ title, author, publisher, url, imageUrl })
          return result
        }, [])
      )
      .then(books => queryInterface.bulkInsert('Books', books, {}))
      .catch(error => console.error(error)),
  down: queryInterface => queryInterface.bulkDelete('Books', null, {}),
}
