const faker = require('faker')

const books = [...Array(50)].map(() => ({
  title: faker.random.words(),
  author: faker.name.findName(),
  publisher: faker.company.companyName(),
  createdAt: new Date(),
  updatedAt: new Date(),
}))

module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('Books', books, {}),
  down: queryInterface => queryInterface.bulkDelete('Books', null, {}),
}
