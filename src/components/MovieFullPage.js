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
        console.log(res.data)
        return setMovieDetails(res.data)
      })
  }, [])
  return (
    <div className="full_page_container">
      <img className="full_page_poster" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path || movieDetails.backdrop_path}`} />
      <div className="movie_info">
        <div>Name: {movieDetails.title}</div>
        <div>Tagline: {movieDetails.tagline}</div>
        <div>Rating: {movieDetails.vote_average}   (Number Of Votes: {movieDetails.vote_count})</div>
        <div className="movie_description">Description: {movieDetails.overview}</div>
        <div>Language: {movieDetails.original_language}</div>
        <div>Release Date: {movieDetails.release_date}</div>
      </div>
    </div >
  )
}

export default MovieFullPage
