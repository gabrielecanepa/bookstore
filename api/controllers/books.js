const { Book } = require('../models')

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll()
    return res.status(200).json({ books })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBooks,
}
