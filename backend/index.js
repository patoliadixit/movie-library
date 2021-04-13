const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

const { search_details, big_poster, homepage_data_get, movies_by_genre, movie_details_get } = require('./utils')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hi')
})
app.get('/homepage', async (req, res) => {
  let result = await homepage_data_get({ page: req.query.page })
  res.json(result)
})
app.get('/movie/:id', async (req, res) => {
  let result = await movie_details_get({ id: req.params.id })
  res.json(result)
})
app.get('/genre/:gen/:page', async (req, res) => {
  let result = await movies_by_genre({ genre: req.params.gen, page: req.params.page })
  res.json(result)
})

app.get('/search/:key_word', async (req, res) => {
  let result = await search_details({ key_word: req.params.key_word })
  res.json(result)
})
app.get('/bigposter', async (req, res) => {
  let result = await big_poster()
  res.json(result)
})
app.listen(5000, (req, res) => {
  console.log("started")
})
