import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./MovieFullPage.css"
import URL from './urls'
function MovieFullPage() {
  let { id } = useParams()
  let url = `${URL}/movie/`
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    axios.get(`${url}${id}`)
      .then(res => {
        return setMovieDetails(res.data)
      })
  }, [])
  return (
    <div className="full_page_container">
      <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path || movieDetails.backdrop_path}`} />
    </div>
  )
}

export default MovieFullPage
