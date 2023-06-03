import './Home.scss'
import { useState, useEffect } from 'react'

//Components
import Moviecard from '../../components/movieCard/MovieCard'

//Api
import { MovieService } from '../../api/MovieService'

const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([])
  
  const getMovies = async () =>{
    //Desestruturando o objeto em 2 partes
    const {data : {results}} = await MovieService.getMovies()

    setMovies(results)
  }

  useEffect(() =>{
    getMovies()

  }, []) 

  //Search event
  const getMovieSearch = async (movieString) =>{
    const {data : {results}} = await MovieService.searchMovie(movieString)

    setMovies(results)
  }

  useEffect(()=>{
    if(searchValueProp){
      getMovieSearch(searchValueProp)
    }
    if(searchValueProp === ''){
      getMovies()
    }
  }, [searchValueProp])
  return (

    <section className='home'>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Moviecard movieProp={movie} />
        </div>
      ))

      }
    </section>
  )
}

export default Home