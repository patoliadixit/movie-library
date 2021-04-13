import React, { useState } from 'react'
import "./MovieCard.css"
import axios from 'axios'
function MovieCard({ movie }) {
  const [expanded, setExpanded] = useState(false);
  const base_url = 'https://image.tmdb.org/t/p/w342';
  let a = "/movie/" + movie.id
  const mouseOver = (event) => {
    setExpanded(true)
  }
  const mouseLeave = (event) => {
    setExpanded(false)
  }
  const Ratings = () => {
    let s = "⭐".repeat(movie.vote_average)
    let result = `Rating:${movie.vote_average} Votes:${movie.vote_count}`
    return result
  }
  return (
    <>
      <div className="movie_card" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
        {expanded ? <div className="movie_title">{movie.title}</div> : <br />}
        <div className="poster">
          <img className="img_class" src={`${base_url}${movie.poster_path}` || `${base_url}${movie.backdrop_path}`} alt={movie.title} />
        </div>
        {expanded ? <div className="movie_title rating_class" ><span>{`Rating:${movie.vote_average}`}</span><span>{`Votes:${movie.vote_count}`}</span></div> : <div>" "</div>}
      </div>
    </>
  )
}

export default MovieCard
