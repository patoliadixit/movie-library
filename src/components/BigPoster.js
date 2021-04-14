import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./BigPoster.css"
import { useHistory } from 'react-router-dom';
import URL from './urls'
function BigPoster() {
  const history = useHistory()
  const [movie, setMovie] = useState([]);
  const url = `${URL}/bigposter`
  useEffect(async () => {
    axios.get(url)
      .then(res => {
        let p = res.data[Math.floor(Math.random() * res.data.length)]
        console.log(p)
        setMovie(p)
      })
  }, [])
  const truncateText = (str) => {
    return str?.length > 250 ? str.substr(0, 249) + "..." : str;
  }
  const got_to_movie = (event) => {
    event.preventDefault()
    history.push(`/movie/${movie.id}`)
  }
  return (
    <div className="big_poster_img_container_class" onClick={got_to_movie}>
      <img className="big_poster_img_class" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      <div className="fade_bottom"></div>
      <div className="poster_text">
        <div className="poster_title">{movie.title || movie.original_title}</div>
        <div className="poster_overview">{truncateText(movie.overview)}</div>
      </div>

    </div>
  )
}

export default BigPoster
