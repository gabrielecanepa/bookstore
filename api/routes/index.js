const { Router } = require('express')
const { BooksController } = require('../controllers')
const router = Router()

router.get('/books', BooksController.getAllBooks)

router.get('*', (_req, res) => {
  res.status(404).send({
    error: 'Not Found',
  })
})

module.exports = router
