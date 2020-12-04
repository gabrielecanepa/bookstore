require('dotenv').config()

module.exports = {
  development: {
    database: 'bookstore_development',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    database: 'bookstore_test',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}
