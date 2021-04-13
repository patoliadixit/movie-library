import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ScrollContainer from 'react-indiana-drag-scroll'
import BigPoster from './BigPoster'
import MovieCard from './MovieCard'
import './HomePage.css'
function HomePage() {
  let url = 'http://localhost:5000/homepage'
  url = 'http://104.236.110.205/homepage'
  const [movie_list, setMovie_list] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get(url, { params: { page } })
      .then(res => {
        setPage(prv => prv + 1)
        setMovie_list(res.data)
      })
  }, [])
  const loadMoreHandler = (event) => {
    setLoading(true)
    axios.get(url, { params: { page } })
      .then(res => {
        setLoading(false)
        setPage(prv => prv + 1)
        setMovie_list(prv => [...prv, ...res.data])
      })
  }
  return (
    <>
      <BigPoster />
      {movie_list.length > 0 ?
        <div >
          {movie_list.map(item => (
            <div className="container" key={item.name}>
              <Link to={`/genre/${item.name}`} >
                <div className="title_class">{item.name}</div>
              </Link>
              <ScrollContainer className='scroll-container movie_list' >
                {item.data.map((movie, index) => {
                  return movie.vote_count > 0 &&
                    < div key={movie.id + item.name} >
                      <Link to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie} />
                      </Link>
                    </div>
                })}
              </ScrollContainer >
            </div>
          ))}
          {loading && <div className="small_loading">Loading</div>}
          <div className="button_container">
            <button
              disabled={(page > 4) || loading ? true : false}
              onClick={loadMoreHandler}
              className="load_more_button"
            >Load More</button>
          </div>
        </div>
        : <div className="loading">Loading</div>
      }
    </>
  )
}

export default HomePage
