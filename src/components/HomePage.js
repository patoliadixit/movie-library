import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import ScrollContainer from 'react-indiana-drag-scroll'
import BigPoster from './BigPoster'
import MovieCard from './MovieCard'
import './HomePage.css'
import URL from './urls.js'
function HomePage() {
  const [movie_list, setMovie_list] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get(`${URL}/homepage`, { params: { page } })
      .then(res => {
        setPage(prv => prv + 1)
        setMovie_list(res.data)
      })
  }, [])
  const loadMoreHandler = (event) => {
    setLoading(true)
    axios.get(`${URL}/homepage`, { params: { page } })
      .then(res => {
        setLoading(false)
        setPage(prv => prv + 1)
        setMovie_list(prv => [...prv, ...res.data])
      })
  }
  const history = useHistory()
  const to_genre = (event) => {
    event.preventDefault()
    history.push()
  }
  return (
    <>
      <BigPoster />
      {movie_list.length > 0 ?
        <div >
          {movie_list.map(item => (
            <div className="container" key={item.name}>
              <Link to={`/genre/${item.name}`} className="title_class">
                {item.name}
                {/* <span className="title_class">{item.name}</span> */}
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
