import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import API_KEY from './../env.js'

function MovieFullPage() {
  let { id } = useParams()
  const url = "https://api.themoviedb.org/3/movie/"
  const [movieDetails, setMovieDetails] = useState({});
  const api_key = API_KEY
  console.log(API_KEY)
  const base_url = 'https://image.tmdb.org/t/p/w342';
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key
        }
      })
      .then(res => {
        console.log(res.data)
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
