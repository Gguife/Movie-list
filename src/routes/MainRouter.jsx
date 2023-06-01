import { useRoutes } from "react-router-dom"

//Pages
import { Home } from '../pages/home/Home'

const MainRouter = () => {
  const router = useRoutes([
    {path: '/', element: <Home />}
  ])
  
  return router
}

export default MainRouter