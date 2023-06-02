import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({movieProp}) => {
  return (
    <div className='MovieCard'>
      <div className="movie-image">
        <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={movieProp.title} width={30} />
      </div>
      <div className="movie-info">
        <h2>{movieProp.title}</h2>
        <Link to={`/movie/${movieProp.id}`} className='btn-details'>Ver mais</Link>
      </div>
    </div>
  )
}

export default MovieCard