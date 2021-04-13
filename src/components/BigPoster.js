import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./BigPoster.css"

function BigPoster() {
  const [movie, setMovie] = useState([]);
  let uurl = 'http://104.236.110.205/bigposter'
  useEffect(async () => {
    axios.get(uurl || 'http://localhost:5000/bigposter')
      .then(res => {
        let p = res.data[Math.floor(Math.random() * res.data.length)]
        setMovie(p)
      })
  }, [])
  const truncateText = (str) => {
    return str?.length > 250 ? str.substr(0, 249) + "..." : str;
  }
  return (
    <div className="big_poster_img_container_class">
      <img className="big_poster_img_class" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      <div className="fade_bottom"></div>
      <div className="poster_text">
        <div className="poster_title">{movie.name}</div>
        <div className="poster_overview">{truncateText(movie.overview)}</div>
      </div>

    </div>
  )
}

export default BigPoster
