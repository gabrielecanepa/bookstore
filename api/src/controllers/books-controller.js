const {
  Book,
  Sequelize: { col, fn, Op },
} = require('../database')

const index = async (req, res) => {
  try {
    const { q, order_by } = req.query
    const books = await Book.findAll({
      where: q && {
        [Op.or]: {
          title: { [Op.iLike]: `%${q}%` },
          author: { [Op.iLike]: `%${q}%` },
          publisher: { [Op.iLike]: `%${q}%` },
        },
      },
      order: ['title', 'author', 'publisher'].includes(order_by) && [[fn('lower', col(order_by)), 'ASC']],
    })
    return res.status(200).json(books)
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = {
  index,
}
