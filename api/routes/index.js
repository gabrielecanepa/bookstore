const { Router } = require('express')
const { BooksController } = require('../controllers')
const router = Router()
router.get('/books', BooksController.getAllBooks)
module.exports = router
