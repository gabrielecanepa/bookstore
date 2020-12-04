const app = require('express')()
const bodyParser = require('body-parser')

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Define routes
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the bookstore!' })
})

// Set port and launch server
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.info(`INFO | Server is running on port ${PORT}`)
})
