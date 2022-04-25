const express = require('express')
const routes = require('./Config/Routes')

const app = express()
routes(app)

module.exports = app