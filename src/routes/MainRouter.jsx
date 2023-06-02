import { useRoutes } from "react-router-dom"

//Pages
import Home  from '../pages/home/Home'
import MovieDetail from '../pages/movieDetail/MovieDetail'

const MainRouter = () => {
  const router = useRoutes([
    {path: '/', element: <Home />},
    {path: '/movie/:id', element: <MovieDetail />},
  ])
  
  return router
}

export default MainRouter