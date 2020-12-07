const app = require('express')()
const router = require('./routes')
const logger = require('morgan')
const cors = require('cors')

// Middlewares
app.use(cors())
app.use(logger('dev'))

// Define routes
app.use('/', router)

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the bookstore!' })
})

// Set port and launch server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.info(`INFO | Server is running on port ${PORT}`)
})
