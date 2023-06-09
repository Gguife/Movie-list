import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '78e75d524d54f7dc8cb20ecdd27e5dfe'

const withBaseUrl = ( path ) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
  static getMovies(){
    return axios(withBaseUrl("movie/popular"))
  }
  static getMovieDetails(id){
    return axios(withBaseUrl(`movie/${id}`))
  }
  static searchMovie(movie){
    return axios(withBaseUrl('search/movie')+`&query=${movie}`)
  }
} 