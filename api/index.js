const app = require('express')()
const router = require('./routes')
const logger = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(logger('dev'))

app.use('/', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.info(`INFO | Server is running on port ${PORT}`)
})
