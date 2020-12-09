const server = require('./src/server')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.info(`INFO | Server is running on port ${PORT}`)
})
