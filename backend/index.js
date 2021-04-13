const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

const { big_poster, homepage_data_get, movies_by_genre } = require('./utils')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hi')
})
app.get('/homepage', async (req, res) => {
  console.log(req.query.page)
  let result = await homepage_data_get({ page: req.query.page })
  res.json(result)
})
app.get('/genre/:gen/:page', async (req, res) => {
  let result = await movies_by_genre({ genre: req.params.gen, page: req.params.page })
  console.log(result)
  res.json(result)
})
app.get('/bigposter', async (req, res) => {
  let result = await big_poster()
  console.log(result)

  res.json(result)
})
app.listen(5000, (req, res) => {
  console.log("hi")
})
