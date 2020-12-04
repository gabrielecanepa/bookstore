const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes')
const logger = require('morgan')

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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
