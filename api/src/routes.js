const { Router } = require('express')
const BooksController = require('./controllers/books-controller')
const router = Router()

router.get('/books', BooksController.index)

router.get('*', (_req, res) => {
  res.status(404).send({ error: 'Not Found' })
})

module.exports = router
