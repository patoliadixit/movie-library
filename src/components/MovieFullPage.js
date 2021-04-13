import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function MovieFullPage() {
  let { id } = useParams()
  let url = "http://localhost:5000/movie/"
  url = 'http://104.236.110.205/movie/'
  const [movieDetails, setMovieDetails] = useState({});
  const base_url = 'https://image.tmdb.org/t/p/w342';
  useEffect(() => {
    axios.get(`${url}${id}`)
      .then(res => {
        return setMovieDetails(res.data)
      })
  }, [])
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path || movieDetails.backdrop_path}`} />
    </div>
  )
}

export default MovieFullPage
