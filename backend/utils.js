require('dotenv').config()
const api_key = process.env.API_KEY

const axios = require('axios')

const urls = [
  {
    url: 'https://api.themoviedb.org/3/movie/popular',
    name: "Popular"
  },
  {
    url: 'https://api.themoviedb.org/3/discover/movie?&with_genres=27',
    name: "Horror"
  },
  {
    url: 'https://api.themoviedb.org/3/discover/movie?&with_genres=16',
    name: "Animation"
  },
  {
    url: 'https://api.themoviedb.org/3/discover/movie?&with_genres=18',
    name: "Drama"
  }
]
const genre_list = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 12,
    "name": "Adventure"
  },

  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },

  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]
const movies_by_genre = async ({ genre, page }) => {
  if (genre == "Popular") {
    let genre_get = await axios.get('https://api.themoviedb.org/3/movie/popular', { params: { api_key } })
    return genre_get.data.results
  }
  let genre_id = genre_list.find(elem => elem.name === genre).id
  let genre_get = await axios.get(`https://api.themoviedb.org/3/discover/movie?&with_genres=${genre_id}`, { params: { api_key } })
  return genre_get.data.results
}
const homepage_data_get = async ({ page }) => {
  let inner = async () => {
    if (page == 1) {
      let promises = [
        axios.get('https://api.themoviedb.org/3/movie/popular', { params: { api_key } })
          .then(res => {
            return ({ name: "Popular", data: [...res.data.results] })
          })
      ]
      for (let u of genre_list.slice(0, 4)) {
        promises.push(
          axios.get(`https://api.themoviedb.org/3/discover/movie?&with_genres=${u.id}`, { params: { api_key, sort_by: "revenue.desc" } })
            .then(res => {
              return ({ name: u.name, data: [...res.data.results] })
            })
        )
      }
      return Promise.all(promises)
    }
    let promises = []
    for (let u of genre_list.slice((page - 1) * 5 - 1, ((page - 1) * 5) + 4)) {
      promises.push(
        axios.get(`https://api.themoviedb.org/3/discover/movie?&with_genres=${u.id}`, { params: { api_key, sort_by: "revenue.desc" } })
          .then(res => {
            return ({ name: u.name, data: [...res.data.results] })
          })
      )
    }
    return Promise.all(promises)

  }
  let data_get = await inner()
  return data_get
}
const big_poster = async () => {
  let url = 'https://api.themoviedb.org/3/discover/movie/'
  let result = await axios.get(url, { params: { with_networks: 213, api_key } })
  return result.data.results
}
const movie_details_get = async ({ id }) => {
  let url = `https://api.themoviedb.org/3/movie/${id}`
  let result = await axios.get(url, { params: { api_key } })
  return result.data

}
const search_details = async ({ key_word }) => {
  let url = 'https://api.themoviedb.org/3/search/movie?'
  let result = await axios.get(url, { params: { api_key, query: key_word } })
  return result.data

}
module.exports = { search_details, movie_details_get, big_poster, homepage_data_get, movies_by_genre }