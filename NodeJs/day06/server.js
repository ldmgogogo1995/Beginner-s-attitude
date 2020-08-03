const express = require('express');
const app = express()
const filmRoute = require('./routes/film')
const bodyParser = require('body-parser')
app.use()
app.use(bodyParser.json())
app.use('/film', filmRoute)
app.listen('8080', () => {
  console.log('server start on 8080...')
})