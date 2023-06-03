import './MovieDetail.scss'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//Icons
import { GrLanguage, GrView } from 'react-icons/gr'
import { FaLanguage, FaMoneyBillWave } from 'react-icons/fa'

//Api
import { MovieService } from '../../api/MovieService'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const getMovie = async () =>{
    const { data } = await MovieService.getMovieDetails(id)
    setMovie(data)
  }

  useEffect(() =>{
    getMovie()
  }, [])

  return (
    <section className="movieDetails">
      <div className="movieDetails__content">
        <h1>{movie.title}</h1>
        <div className="movie-img">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <p><span><FaMoneyBillWave className='moveDetails-icons' /> Budget:</span> {movie.budget}</p>
          <p><span><FaLanguage className='moveDetails-icons' /> Original Language:</span> {movie.original_language}</p>
          <p><span><GrLanguage className='moveDetails-icons' /> Popularity:</span> {movie.popularity}</p>
        </div>
        <div className="movie-overview">
          <p><span><GrView className='moveDetails-icons' /> Overview:</span> {movie.overview}</p>
        </div>
        <Link to='/'>Voltar</Link>
      </div>
    </section>
  )
}

export default MovieDetail