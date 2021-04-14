import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'
import URL from './urls'
import "./SearchPage.css"
function SearchPage() {
  const [movie_list, setMovie_list] = useState([]);
  let url = `${URL}/search`
  let { query } = useParams()
  useEffect(() => {
    axios.get(`${url}/${query}`)
      .then(res => {
        return setMovie_list(res.data.results)
      })
  }, [query])
  return (
    <div>
      <div className="search_heading">Search Results for... "{query}"</div>
      <div className="result_container">
        {movie_list.map(movie => (
          <div key={movie.id}>
            <Link to={`/ movie / ${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
