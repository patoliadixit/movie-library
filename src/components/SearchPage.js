import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'
import API_KEY from './../env.js'
function SearchPage() {
  const [movie_list, setMovie_list] = useState([]);
  const api_key = API_KEY
  const url = 'https://api.themoviedb.org/3/search/movie?'
  let { query } = useParams()
  useEffect(() => {
    axios.get(url, { params: { api_key, include_adult: "false", query } })
      .then(res => {
        return setMovie_list(res.data.results)
      })
    console.log("search")
  }, [query])
  return (
    <div>
      {query}
      SearchPage
      <div className="result_container">
        {movie_list.map(movie => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
