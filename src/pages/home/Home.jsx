import './Home.scss'
import { useState, useEffect } from 'react'

//Components
import Moviecard from '../../components/movieCard/MovieCard'

//Api
import { MovieService } from '../../api/MovieService'

const Home = () => {
  const [movies, setMovies] = useState([])
  
  const getMovies = async () =>{
    //Desestruturando o objeto em 2 partes
    const {data : {results}} = await MovieService.getMovies()

    setMovies(results)
  }

  useEffect(() =>{
    getMovies()

  }, []) 

  return (

    <section className='home'>
      {movies.map((movie) => (
        <div key={movie}>
          <Moviecard movieProp={movie} />
        </div>
      ))

      }
    </section>
  )
}

export default Home