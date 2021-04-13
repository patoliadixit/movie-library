import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import "./Results.css"
function Results() {
  let { genre } = useParams()
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/genre/${genre}/1`)
      .then(res => {
        console.log(res)
        setMovieList(res.data)
      })
  }, [])
  return (
    <div className="result_container">
      {movieList.map((movie, index) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        </div>))}
    </div>
  )
}

export default Results
