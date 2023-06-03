import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

//Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

//Pages
import Home from './pages/home/Home'
import MovieDetail from './pages/movieDetail/MovieDetail'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div>
      <Header onSubmit={(inputvalue) => setSearchValue(inputvalue) } />
      
      <Routes>
        <Route path='/' element={<Home searchValueProp={searchValue} />} />  
        <Route path='/movie/:id' element={<MovieDetail />} />  
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
