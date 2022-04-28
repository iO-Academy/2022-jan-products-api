const express = require('express')
const routes = require('./Config/Routes')

const app = express()
app.use(express.urlencoded({extended: true}))
routes(app)

module.exports = app