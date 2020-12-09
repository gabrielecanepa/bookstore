const express = require('express')
const router = require('./routes')
const logger = require('morgan')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(logger('dev'))

server.use('/', router)

module.exports = server
