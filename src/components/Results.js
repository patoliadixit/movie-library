import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import "./Results.css"
import URL from './urls'
function Results() {
  let { genre } = useParams()
  let url = `${URL}/genre/`

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(`${url}${genre}/1` || `http://localhost:5000/genre/${genre}/1`)
      .then(res => {
        setMovieList(res.data)
      })
  }, [])
  return (
    <div>
      <div class="search_heading">Results for "{genre}"               </div>
      <div className="result_container">
        {movieList.map((movie, index) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>))}
      </div>
    </div>
  )
}

export default Results
